/**
 * Crea la configurazione per creare vari forma nella pagina
 */
// ************************************************************
import { RequisitoNormaModel, TipiRequisito } from '@models/RequisitoNorma';
import {
  newButton,
  newCombobox,
  newTextArea,
  newTextBox,
  newNumericTextBox,
} from '@src/classi/MyFormField';

const campiRequisiti = RequisitoNormaModel.getCampi();

export function buildFormAnalisiNorma(container: HTMLElement | string) {
  const OPZIONI_REQUIREMENT = [
    {
      value: TipiRequisito.NORMATIVE,
      content: 'Normative',
    },
    {
      value: TipiRequisito.INFORMATIVE,
      content: 'Informative',
    },
    {
      value: TipiRequisito.OTHER,
      content: 'Other',
    },
  ];

  const formAnalisiConfig = {
    css: 'dhx_widget--bg_white dhx_layout-cell--bordered',
    padding: 40,
    rows: [
      newTextBox('Id Record', campiRequisiti.id, 'Id record', '', true, true),
      newNumericTextBox('Chapter', campiRequisiti.chapter, 'Chapter number'),
      newTextBox('Sub Chapter', campiRequisiti.sub_chapter, 'Sub chapter'),
      newTextBox('Topic', campiRequisiti.topic, 'Topic'),
      newCombobox(
        'Select requirement type',
        OPZIONI_REQUIREMENT,
        campiRequisiti.type_requirement,
        'Normative'
      ),
      newTextArea('Requirement', campiRequisiti.requirement, 'Requirement'),
      newTextBox('Note', campiRequisiti.note, 'Notes'),
      {
        cols: [
          newTextBox(
            'Id Images',
            campiRequisiti.id_image,
            '-',
            '',
            true,
            false
          ),
          newButton('Edit', 'btn_edit_images', 'info'),
        ],
      },
      newButton('Save', 'btn_save'),
    ],
  };

  return formAnalisiConfig;
}

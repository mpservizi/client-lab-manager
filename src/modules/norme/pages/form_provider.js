/**
 * Crea la configurazione per creare vari forma nella pagina
 */
// ************************************************************
import { Requirement } from '../models/Requirement';
import {
  newButton,
  newCombobox,
  newTextArea,
  newTextBox,
} from 'classi/MyFormField';

export function buildFormAnalisiNorma() {
  const OPZIONI_REQUIREMENT = [
    {
      value: 'Normative',
      content: 'Normative',
    },
    {
      value: 'Informative',
      content: 'Informative',
    },
    {
      value: 'Other',
      content: 'Other',
    },
  ];

  const formAnalisiConfig = {
    css: 'dhx_widget--bg_white dhx_layout-cell--bordered',
    padding: 40,
    rows: [
      newTextBox('Id Record', Requirement.id, 'Id record', '', true, true),
      newTextBox('Chapter', Requirement.chapter, 'Chapter number'),
      newTextBox('Sub Chapter', Requirement.sub_chapter, 'Sub chapter'),
      newTextBox('Topic', Requirement.topic, 'Topic'),
      newCombobox(
        'Select requirement type',
        OPZIONI_REQUIREMENT,
        Requirement.type_requirement,
        'Normative'
      ),
      newTextArea('Requirement', Requirement.requirement, 'Requirement'),
      newTextBox('Note', Requirement.note, 'Notes'),
      {
        cols: [
          newTextBox('Id Images', Requirement.id_image, '-', '', true, false),
          newButton('Edit', 'btn_edit_images', 'info'),
        ],
      },
      newButton('Save', 'btn_save'),
    ],
  };

  return formAnalisiConfig;
}

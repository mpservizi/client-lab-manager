import { Requirement } from './models/Requirement';

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
    {
      type: 'input',
      label: 'Id Record',
      value: '',
      placeholder: 'Id record',
      name: Requirement.id,
      readOnly: true,
      hidden: true,
    },
    {
      type: 'input',
      label: 'Chapter',
      value: '',
      placeholder: 'Chapter number',
      name: Requirement.chapter,
    },
    {
      type: 'input',
      label: 'Sub Chapter',
      value: '',
      placeholder: 'Sub chapter',
      name: Requirement.sub_chapter,
    },
    {
      type: 'input',
      label: 'Topic',
      value: '',
      placeholder: 'Topic',
      name: Requirement.topic,
    },
    {
      type: 'select',
      label: 'Requirement type',
      value: 'Normative',
      placeholder: 'Select type',
      name: Requirement.type_requirement,
      disabled: false,
      hidden: false,
      helpMessage: '',
      preMessage: '',
      successMessage: '',
      errorMessage: '',
      options: OPZIONI_REQUIREMENT,
    },
    {
      type: 'textarea',
      label: 'Requirement',
      name: Requirement.requirement,
      value: '',
      placeholder: 'Requirement',
      height: '150px',
      disabled: false,
      required: false,
      readOnly: false,
      resizable: false,
      hidden: false,
    },
    {
      type: 'input',
      label: 'Note',
      value: '',
      placeholder: 'Notes',
      name: Requirement.note,
    },
    {
      cols: [
        {
          type: 'input',
          label: 'Id Images',
          value: '',
          placeholder: '-',
          name: Requirement.id_image,
          readOnly: true,
          hidden: false,
        },
        {
          type: 'button',
          text: 'Edit',
          name: 'btn_edit_images',
          size: 'medium',
          view: 'link',
          color: 'primary',
        },
      ],
    },
    {
      type: 'button',
      text: 'Save',
      name: 'btn_save',
      submit: true,
      size: 'medium',
      view: 'flat',
      color: 'primary',
    },
  ],
};

export function getFormAnalisi() {
  return formAnalisiConfig;
}

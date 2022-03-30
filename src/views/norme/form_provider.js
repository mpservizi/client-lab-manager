const formAnalisiConfig = {
  css: 'dhx_widget--bg_white dhx_layout-cell--bordered',
  padding: 40,
  rows: [
    {
      type: 'input',
      label: 'Id Record',
      value: '',
      placeholder: 'Id record',
      name: 'id',
      readOnly: true,
      hidden: true,
    },
    {
      type: 'input',
      label: 'Chapter',
      value: '',
      placeholder: 'Chapter number',
      name: 'chapter',
    },
    {
      type: 'input',
      label: 'Sub Chapter',
      value: '',
      placeholder: 'Sub chapter',
      name: 'sub_chapter',
    },
    {
      type: 'input',
      label: 'Topic',
      value: '',
      placeholder: 'Topic',
      name: 'topic',
    },
    {
      type: 'select',
      label: 'Requirement type',
      value: '1',
      placeholder: 'Select type',
      name: 'type_requirement',
      disabled: false,
      hidden: false,
      helpMessage: '',
      preMessage: '',
      successMessage: '',
      errorMessage: '',
      options: [
        {
          value: '1',
          content: 'Normative',
        },
        {
          value: '2',
          content: 'Informative',
        },
        {
          value: '3',
          content: 'Other',
        },
      ],
    },
    {
      type: 'textarea',
      label: 'Requirement',
      name: 'requirement',
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
      name: 'note',
    },
    {
      cols: [
        {
          type: 'input',
          label: 'Id Images',
          value: '',
          placeholder: '-',
          name: 'id_image',
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

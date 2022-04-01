/**
 * Helper per creare velocemente i componenti del form da codice
 */

export function newTextBox(label, nome, placeholder, valore, readOnly, hidden) {
  return {
    type: 'input',
    label: label || 'Label',
    value: valore || '',
    placeholder: placeholder || '-',
    name: nome || 'txt_001',
    readOnly: readOnly || false,
    hidden: hidden || false,
  };
}
export function newTextArea(
  label,
  nome,
  placeholder,
  valore,
  readOnly,
  hidden
) {
  return {
    type: 'textarea',
    label: label || 'Label',
    value: valore || '',
    placeholder: placeholder || '-',
    name: nome || 'txtarea_001',
    readOnly: readOnly || false,
    hidden: hidden || false,
    disabled: false,
    required: false,
    resizable: false,
    height: '150px',
  };
}
export function newButton(testo, nome, colore) {
  return {
    type: 'button',
    text: testo || 'Button',
    name: nome || 'btn_001',
    submit: false,
    size: 'medium',
    view: 'flat',
    color: colore || 'primary',
  };
}

export function newCombobox(
  label,
  lista,
  nome,
  valore,
  placeholder,
  disabled,
  hidden
) {
  return {
    type: 'select',
    label: label || 'Select an option',
    value: valore || '',
    placeholder: placeholder || '-',
    name: nome || 'cb_001',
    disabled: disabled || false,
    hidden: hidden || false,
    helpMessage: '',
    preMessage: '',
    successMessage: '',
    errorMessage: '',
    options: lista || [],
  };
}

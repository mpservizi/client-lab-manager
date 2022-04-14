/**
 * Helper per creare velocemente i componenti del form da codice
 */

export function newTextBox(
  label,
  nome,
  placeholder,
  valore,
  readOnly,
  hidden,
  required
) {
  return {
    type: 'input',
    label: label || 'Label',
    value: valore || '',
    placeholder: placeholder || '-',
    name: nome || 'txt_001',
    readOnly: readOnly || false,
    hidden: hidden || false,
    validation: 'alphanumeric',
    required: required || false,
  };
}
export function newNumericTextBox(
  label,
  nome,
  placeholder,
  valore,
  readOnly,
  hidden,
  required
) {
  return {
    type: 'input',
    label: label || 'Label',
    value: valore || '',
    placeholder: placeholder || '-',
    name: nome || 'txt_001',
    readOnly: readOnly || false,
    hidden: hidden || false,
    required: required || false,
    validation: 'numeric',
    errorMessage: 'Only numeric values are allowd',
  };
}
export function newTextArea(
  label,
  nome,
  placeholder,
  valore,
  readOnly,
  hidden,
  required
) {
  return {
    type: 'textarea',
    label: label || 'Label',
    value: valore || '',
    placeholder: placeholder || '-',
    name: nome || 'txtarea_001',
    readOnly: readOnly || false,
    hidden: hidden || false,
    required: required || false,
    disabled: false,
    required: false,
    resizable: false,
    height: '150px',
    validation: 'alphanumeric',
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
  hidden,
  required
) {
  return {
    type: 'select',
    label: label || 'Select an option',
    value: valore || '',
    placeholder: placeholder || '-',
    name: nome || 'cb_001',
    disabled: disabled || false,
    hidden: hidden || false,
    required: required || false,
    helpMessage: '',
    preMessage: '',
    successMessage: '',
    errorMessage: '',
    options: lista || [],
  };
}

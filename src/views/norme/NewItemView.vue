<script setup>
import { onMounted, ref } from "vue";

import MyForm from "components/MyForm.vue";
defineProps({
  msg: String,
});

let form = {};

const formConfig = {
  css: "dhx_widget--bg_white dhx_layout-cell--bordered",
  padding: 40,
  rows: [
    {
      type: "input",
      label: "Chapter",
      value: "",
      placeholder: "Chapter number",
      name: "chapter",
    },
    {
      type: "input",
      label: "Sub Chapter",
      value: "",
      placeholder: "Sub chapter",
      name: "sub_chapter",
    },
    {
      type: "input",
      label: "Topic",
      value: "",
      placeholder: "Topic",
      name: "topic",
    },
    {
      type: "select",
      label: "Requirement type",
      value: "1",
      placeholder: "Select type",
      name: "type_requirement",
      disabled: false,
      hidden: false,
      helpMessage: "",
      preMessage: "",
      successMessage: "",
      errorMessage: "",
      options: [
        {
          value: "1",
          content: "Normative",
        },
        {
          value: "2",
          content: "Informative",
        },
        {
          value: "3",
          content: "Other",
        },
      ],
    },
    {
      type: "textarea",
      label: "Requirement",
      name: "requirement",
      value: "",
      placeholder: "Requirement",
      height: "150px",
      disabled: false,
      required: false,
      readOnly: false,
      resizable: false,
      hidden: false,
    },
    {
      type: "input",
      label: "Note",
      value: "",
      placeholder: "Notes",
      name: "note",
    },
    {
      type: "button",
      text: "Save",
      name: "btn_save",
      submit: true,
      size: "medium",
      view: "flat",
      color: "primary",
    },
  ],
};

function initForm(container) {
  form = new dhx.Form(container, formConfig);
  form.getItem("btn_save").events.on("click", saveForm);
}

function saveForm() {
  console.log(form.getValue());
}
</script>

<template>
  <div>
    <MyForm @ready="initForm" />
  </div>
</template>

<style scoped></style>

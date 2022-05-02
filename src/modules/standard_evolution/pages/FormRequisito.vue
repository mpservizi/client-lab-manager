<script setup lang="ts">
import { PropType, reactive, unref, watchEffect } from 'vue';
import {
  getDefaultRequisitoNormativo,
  IRequisitoNormativo,
} from '../models/RequisitoNormativo';

const emit = defineEmits(['save', 'cancel']);

const props = defineProps({
  payload: Object as PropType<IRequisitoNormativo>,
});
const form: IRequisitoNormativo = reactive(getDefaultRequisitoNormativo());

watchEffect(() => {
  Object.assign(form, props.payload);
});

const onSubmit = () => {
  let result = unref(form);
  emit('save', result);
};
const onCancel = () => {
  emit('cancel');
};

function resetForm() {
  Object.assign(form, getDefaultRequisitoNormativo());
}
defineExpose({
  reset: resetForm,
});
</script>
<template>
  <div>
    <el-form :model="form" label-width="200px">
      <el-form-item label="Chapter">
        <el-input v-model="form.chapter" />
      </el-form-item>
      <el-form-item label="Sub Chapter">
        <el-input v-model="form.sub_chapter" />
      </el-form-item>
      <el-form-item label="Topic">
        <el-input v-model="form.topic" />
      </el-form-item>
      <el-form-item label="Requirement type">
        <el-select
          v-model="form.type_requirement"
          placeholder="Select requirement type"
          width="800px"
        >
          <el-option label="Informative" value="Informative" />
          <el-option label="Normative" value="Normative" />
          <el-option label="Other" value="Other" />
        </el-select>
      </el-form-item>
      <el-form-item label="Requirement">
        <el-input v-model="form.requirement" type="textarea" />
      </el-form-item>
      <el-form-item label="Note">
        <el-input v-model="form.note" />
      </el-form-item>
      <el-form-item label="Images">
        <el-input v-model="form.id_image" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Save</el-button>
        <el-button @click="onCancel">Cancel</el-button>
        <el-button @click="resetForm">Reset</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<style>
.el-select {
  width: 100%;
}
</style>

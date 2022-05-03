<script setup lang="ts">
import { PropType, reactive, ref, unref, watchEffect } from 'vue';
import {
  getDefaultRequisitoNormativo,
  IRequisitoNormativo,
} from '../models/RequisitoNormativo';

const emit = defineEmits(['m_submit', 'm_error', 'm_delete', 'm_cancel']);

const props = defineProps({
  payload: Object as PropType<IRequisitoNormativo>,
  titolo: {
    type: String,
    required: true,
  },
  delete_btn: {
    type: Boolean,
    required: false,
    default: false,
  },
  reset_btn: {
    type: Boolean,
    required: false,
    default: false,
  },
  cancel_btn: {
    type: Boolean,
    required: false,
    default: true,
  },
});

const form: IRequisitoNormativo = reactive(getDefaultRequisitoNormativo());
const titolo_form = ref('Requirement form');

const showDelete = ref(false);
const showReset = ref(false);
const showCancel = ref(true);

watchEffect(() => {
  Object.assign(form, props.payload);
  titolo_form.value = props.titolo;

  showDelete.value = props.delete_btn;
  showReset.value = props.reset_btn;
  showCancel.value = props.cancel_btn;
});

const onSubmit = () => {
  let result = unref(form);
  emit('m_submit', result);
};

function resetForm() {
  Object.assign(form, getDefaultRequisitoNormativo());
}

defineExpose({
  reset: resetForm,
});
</script>
<template>
  <div class="form_box">
    <div>
      <h1>{{ titolo_form }}</h1>
      <el-divider></el-divider>
    </div>
    <el-form :model="form" label-width="150px">
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
        >
          <el-option label="Informative" value="Informative" />
          <el-option label="Normative" value="Normative" />
          <el-option label="Other" value="Other" />
        </el-select>
      </el-form-item>
      <el-form-item label="Requirement">
        <el-input
          v-model="form.requirement"
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 6 }"
        />
      </el-form-item>
      <el-form-item label="Note">
        <el-input v-model="form.note" />
      </el-form-item>
      <el-form-item label="Images">
        <el-input v-model="form.id_image" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Save</el-button>
        <el-button v-if="showCancel" @click="emit('m_cancel')"
          >Cancel</el-button
        >
        <el-button v-if="showReset" @click="resetForm()">Reset</el-button>
        <el-button v-if="showDelete" type="danger" @click="emit('m_delete')"
          >Delete</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>
<style scoped>
.form_box {
  width: 600px;
}
.el-select {
  width: 100%;
}
</style>

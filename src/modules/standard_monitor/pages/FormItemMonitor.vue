<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { NOMI_ROUTES } from '../index';
import { MyRouter } from '@src/helpers/MyRouter';
import type { FormInstance, FormRules } from 'element-plus';
import { useNormeMonitorStore } from '../store';
import { IItemMonitor, getDefaultModel } from '../models/ItemMonitor';

const emit = defineEmits(['m_submit', 'm_error', 'm_delete', 'm_cancel']);
const store = useNormeMonitorStore();
const formModelObj: IItemMonitor = reactive(getDefaultModel());

const showDelete = ref(false);
const showReset = ref(false);
const showCancel = ref(true);

let isNewForm = true;
onMounted(async () => {
  if (store.itemSelezionato) {
    isNewForm = false;
    Object.assign(formModelObj, store.itemSelezionato);
  } else {
    isNewForm = true;
  }
});
//Riferimento al tempalte del form, non usato
const ruleFormRef = ref<FormInstance>();

//Regole validazione campi, il nome del campo deve corrispondere al campo del formModelObj
const rules = reactive<FormRules>({
  title: [
    {
      required: true,
      message: 'Please input standard title ',
      trigger: 'blur',
    },
  ],
});
//Click tasto save
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      emit('m_submit', creaRisultatoForm());
    } else {
      console.log('error submit!', fields);
      emit('m_error', fields);
    }
  });
};

//Tasto reset
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};

//Crea oggetto norma in base ai campi del form
function creaRisultatoForm(): IItemMonitor {
  let result = getDefaultModel();
  Object.assign(result, formModelObj);
  return result;
}
</script>

<template>
  <div class="form_box">
    <el-form :model="formModelObj" label-width="150px" ref="ruleFormRef">
      <!-- Last update -->
      <el-form-item label="Last update" prop="last_update">
        <el-date-picker
          v-model="formModelObj.last_update"
          placeholder="Date of last check"
          type="date"
          :default-value="new Date()"
          format="DD/MM/YYYY"
        />
      </el-form-item>
      <!-- Author -->
      <el-form-item label="Author" prop="who">
        <el-input
          v-model="formModelObj.who"
          placeholder="Check made by"
          clearable
        />
      </el-form-item>
      <!-- Source -->
      <el-form-item label="Source" prop="source">
        <el-input
          v-model="formModelObj.source"
          placeholder="Source"
          clearable
        />
      </el-form-item>
      <!-- Note -->
      <el-form-item label="Notes" prop="note">
        <el-input v-model="formModelObj.note" placeholder="Source" clearable />
      </el-form-item>

      <!-- Save button -->
      <el-form-item>
        <el-button type="success" @click="submitForm(ruleFormRef)"
          >Save</el-button
        >

        <!-- Cancel button -->
        <el-button v-if="showCancel" @click="emit('m_cancel')"
          >Cancel</el-button
        >
        <!-- Reset button -->
        <el-button v-if="showReset" @click="resetForm(ruleFormRef)"
          >Reset</el-button
        >
        <!-- Delete -->
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
</style>

<script setup lang="ts">
import { onMounted, PropType, reactive, ref, watch, watchEffect } from 'vue';
import type { FormInstance, FormRules } from 'element-plus';
import { IFormConfig } from './../models/FormConfig';
import { INormaForm, getDefaultNorma } from './../models/Norma';
import { creaTitoloNorma, getComiteeById } from '../logic/funzioni';
const emit = defineEmits(['m_submit', 'm_error']);

const props = defineProps({
  config: {
    type: Object as PropType<IFormConfig>,
    required: true,
  },
  payload: {
    type: Object as PropType<INormaForm>,
    required: true,
  },
});

//Configurazione del form
let formConfig: IFormConfig = reactive({
  lista_comitee: [],
  tipi_norme: [],
});

//Oggetto usato come model del form
let formModelObj = reactive(getDefaultNorma());

onMounted(async () => {});

watchEffect(() => {
  Object.assign(formConfig, props.config);
  setCampiFormDaProps(props.payload);
});

//Imposta i campi del modelform in base ai campi del props
function setCampiFormDaProps(payload: INormaForm) {
  if (!payload) return;
  //Se id comitee è impostato, altrimenti mostro il place holder le select
  if (payload.id_comitee) {
    formModelObj.id_comitee = payload.id_comitee;
  }
  formModelObj.id = payload.id;
  formModelObj.ammendments = payload.ammendments;
  formModelObj.prefix = payload.prefix;
  formModelObj.standard = payload.standard;
  formModelObj.tipo = payload.tipo;
  formModelObj.year = payload.year;
  formModelObj.comitee_title = payload.comitee_title;
  //Titolo è calcolato in automatico
  // formModelObj.title=payload.title
}

//Crea oggetto norma in base ai campi del form
function creaRisultatoForm() {
  let result = getDefaultNorma();
  //Sovrascrivo i valori di default per la norma
  result.id = formModelObj.id;
  if (formModelObj.id_comitee) {
    result.id_comitee = formModelObj.id_comitee;
  }
  result.ammendments = formModelObj.ammendments;
  result.prefix = formModelObj.prefix;
  result.standard = formModelObj.standard;
  result.year = formModelObj.year;
  result.tipo = formModelObj.tipo;
  result.comitee_title = formModelObj.comitee_title;
  result.title = titoloNorma();
  return result;
}
//Riferimento al tempalte del form, non usato
const ruleFormRef = ref<FormInstance>();
//Regole validazione campi, il nome del campo deve corrispondere al campo del formModelObj
const rules = reactive<FormRules>({
  standard: [
    {
      required: true,
      message: 'Please input standard number',
      trigger: 'blur',
    },
  ],
  id_comitee: [
    {
      required: true,
      message: 'Please select a comitee',
      trigger: 'blur',
    },
  ],
  tipo: [
    {
      required: true,
      message: 'Please select standard type',
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

//Crea il titolo del form in base ai campi
function titoloNorma() {
  if (formModelObj.standard == '') return '';
  let comitee = getComiteeById(
    formConfig.lista_comitee,
    formModelObj.id_comitee
  );
  formModelObj.comitee_title = comitee.title;
  return creaTitoloNorma(
    formModelObj.comitee_title,
    formModelObj.standard,
    formModelObj.year,
    formModelObj.ammendments,
    formModelObj.prefix
  );
}
</script>

<template>
  <div class="form_box">
    <div>{{ formModelObj }}</div>
    <div>
      <h1>Add new standard</h1>
      <el-divider></el-divider>
    </div>
    <el-form
      ref="ruleFormRef"
      :model="formModelObj"
      :rules="rules"
      label-width="150px"
      class="demo-ruleForm"
    >
      <el-form-item label="Type" prop="tipo">
        <el-select
          v-model="formModelObj.tipo"
          class="m-2"
          placeholder="Select standard type"
          size="default"
        >
          <el-option
            v-for="(item, index) in formConfig.tipi_norme"
            :key="index"
            :label="item"
            :value="item"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="Comitee" prop="id_comitee">
        <el-select
          v-model="formModelObj.id_comitee"
          class="m-2"
          placeholder="Select a comitee"
          size="default"
        >
          <el-option
            v-for="item in formConfig.lista_comitee"
            :key="item.id"
            :label="item.title"
            :value="item.id"
          />
        </el-select>
      </el-form-item>

      <el-form-item label="Stadard number" prop="standard">
        <el-input
          v-model="formModelObj.standard"
          placeholder="Standard number"
          clearable
        />
      </el-form-item>

      <el-form-item label="Year" prop="year">
        <el-input-number v-model="formModelObj.year" :min="1900" :max="9999" />
      </el-form-item>

      <el-form-item label="Ammendments" prop="ammendments">
        <el-input
          v-model="formModelObj.ammendments"
          placeholder="Ammendments"
          clearable
        />
      </el-form-item>
      <el-form-item label="Prefix" prop="prefix">
        <el-input
          v-model="formModelObj.prefix"
          placeholder="Prefix"
          clearable
        />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)"
          >Save</el-button
        >
        <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
      </el-form-item>
      <el-form-item>{{ titoloNorma() }}</el-form-item>
    </el-form>
  </div>
</template>

<style scoped>
.form_box {
  width: 600px;
}
</style>

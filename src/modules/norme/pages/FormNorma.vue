<script setup lang="ts">
import { computed, onMounted, PropType, reactive, ref, watchEffect } from 'vue';
import type { FormInstance, FormRules } from 'element-plus';
import { IFormConfig } from './../models/FormConfig';
import { INormaForm, getDefaultNorma } from './../models/Norma';
import { TIPI_FORMAT_NORMA } from '@src/shared/Costanti';

const emit = defineEmits(['m_submit', 'm_error', 'm_delete', 'm_cancel']);

const props = defineProps({
  config: {
    type: Object as PropType<IFormConfig>,
    required: true,
  },
  payload: {
    type: Object as PropType<INormaForm>,
    required: true,
  },
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

//Configurazione del form
let formConfig: IFormConfig = reactive({
  lista_comitee: [],
  tipi_norme: [],
  tipi_status: [],
  tipi_format_norme: [],
});

//Oggetto usato come model del form
let formModelObj = reactive(getDefaultNorma());
const titolo_form = ref('Add new norma');

const showDelete = ref(false);
const showReset = ref(false);
const showCancel = ref(true);

onMounted(async () => {});

watchEffect(() => {
  Object.assign(formConfig, props.config);
  setCampiFormDaProps(props.payload);
  titolo_form.value = props.titolo;

  showDelete.value = props.delete_btn;
  showReset.value = props.reset_btn;
  showCancel.value = props.cancel_btn;
});

const titoloNormaFormatatto = computed(() => {
  return formattaTitoloNorma(formModelObj.title);
});

//Formatta il titolo della norma
function formattaTitoloNorma(title: string) {
  let titolo = title.toUpperCase();
  return titolo;
}

//Imposta i campi del modelform in base ai campi del props
function setCampiFormDaProps(payload: INormaForm) {
  if (!payload) return;
  Object.assign(formModelObj, payload);
}

//Crea oggetto norma in base ai campi del form
function creaRisultatoForm(): INormaForm {
  let result = getDefaultNorma();
  Object.assign(result, formModelObj);
  //Salvo il titolo formattato
  result.title = formattaTitoloNorma(formModelObj.title);
  return result;
}
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
  tipo: [
    {
      required: true,
      message: 'Please select standard type',
      trigger: 'blur',
    },
  ],
  status: [
    {
      required: true,
      message: 'Please select standard status',
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

//Restituisce il label da impostare in base al valore del format normativo
function getLabelFormatNorma(valore: string) {
  let result = '';
  switch (valore) {
    case TIPI_FORMAT_NORMA.digital:
      result = 'Digital  only';
      break;
    case TIPI_FORMAT_NORMA.paper:
      result = 'Paper only';
      break;
    case TIPI_FORMAT_NORMA.paper_digital:
      result = 'Paper & Digital';
      break;

    default:
      result = 'Format ?';
      break;
  }
  return result;
}
</script>

<template>
  <div class="form_box">
    <div>
      <h1>{{ titolo_form }}</h1>
      <el-divider></el-divider>
    </div>
    <el-form
      ref="ruleFormRef"
      :model="formModelObj"
      :rules="rules"
      label-width="150px"
      class="demo-ruleForm"
    >
      <!-- Tipo norma -->
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

      <!-- Status norma -->
      <el-form-item label="Status" prop="status">
        <el-select
          v-model="formModelObj.status"
          class="m-2"
          placeholder="Select standard status"
          size="default"
        >
          <el-option
            v-for="(item, index) in formConfig.tipi_status"
            :key="index"
            :label="item"
            :value="item"
          />
        </el-select>
      </el-form-item>

      <!-- Titolo -->
      <el-form-item label="Title" prop="title">
        <el-input
          v-model="formModelObj.title"
          placeholder="Standard complete title"
          clearable
        />
      </el-form-item>

      <!-- Entry date -->
      <el-form-item label="Valid from" prop="entry_date">
        <el-date-picker
          v-model="formModelObj.entry_date"
          placeholder="Entry date"
          type="date"
          :default-value="new Date()"
          format="DD/MM/YYYY"
        />
      </el-form-item>

      <!-- Exit date -->
      <el-form-item label="Valid till" prop="exit_date">
        <el-input
          v-model="formModelObj.exit_date"
          placeholder="Exit date"
          clearable
        />
      </el-form-item>

      <!-- Lingua -->
      <el-form-item label="Language" prop="language">
        <el-input
          v-model="formModelObj.language"
          placeholder="Language"
          clearable
        />
      </el-form-item>

      <!-- Tipo format -->
      <el-form-item label="Format" prop="format">
        <el-select
          v-model="formModelObj.format"
          class="m-2"
          placeholder="Select standard format"
          size="default"
        >
          <el-option
            v-for="(item, index) in formConfig.tipi_format_norme"
            :key="index"
            :label="getLabelFormatNorma(item)"
            :value="item"
          />
        </el-select>
      </el-form-item>

      <!-- Note -->
      <el-form-item label="Notes" prop="note">
        <el-input v-model="formModelObj.note" placeholder="Notes" clearable />
      </el-form-item>

      <!-- Titolo formattato -->
      <el-form-item label="Title formatted">{{
        titoloNormaFormatatto
      }}</el-form-item>

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
.el-select,
.txt_anno {
  width: 100%;
}
</style>

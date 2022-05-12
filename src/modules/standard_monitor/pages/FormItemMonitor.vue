<script setup lang="ts">
import { PropType, reactive, ref, unref, watchEffect, onMounted } from 'vue';
import { NOMI_ROUTES } from '../index';
import { MyRouter } from '@src/helpers/MyRouter';
import type { FormInstance, FormRules } from 'element-plus';
import { useNormeMonitorStore } from '../store';
import { IItemMonitor, getDefaultModel } from '../models/ItemMonitor';

const emit = defineEmits(['m_submit', 'm_error', 'm_delete', 'm_cancel']);
const store = useNormeMonitorStore();
const formModelObj: IItemMonitor = reactive(getDefaultModel());

const titolo_form = ref('Standard monitor form');
const showDelete = ref(false);
const showReset = ref(false);
const showCancel = ref(true);

const props = defineProps({
  payload: Object as PropType<IItemMonitor>,
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

let isNewForm = ref(true);
onMounted(async () => {
  // if (store.itemSelezionato) {
  //   isNewForm = false;
  //   Object.assign(formModelObj, store.itemSelezionato);
  // } else {
  //   isNewForm = true;
  // }
});

watchEffect(() => {
  if (props.payload) {
    Object.assign(formModelObj, props.payload);
    isNewForm.value = false;
  } else {
    Object.assign(formModelObj, getDefaultModel());
    isNewForm.value = true;
  }

  titolo_form.value = props.titolo;

  showDelete.value = props.delete_btn;
  showReset.value = props.reset_btn;
  showCancel.value = props.cancel_btn;
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
function resetForm() {
  Object.assign(formModelObj, getDefaultModel());
}

//Crea oggetto norma in base ai campi del form
function creaRisultatoForm(): IItemMonitor {
  let result = getDefaultModel();
  Object.assign(result, formModelObj);
  return result;
}
</script>

<template>
  <div class="form_box">
    <div>
      <h1>{{ titolo_form }}</h1>
      <el-divider></el-divider>
    </div>
    <el-form :model="formModelObj" label-width="150px" ref="ruleFormRef">
      <!-- Norma -->
      <el-form-item label="Standard" prop="who">
        <el-input
          v-model="formModelObj.norma.title"
          placeholder="Standard"
          :readonly="!isNewForm"
        />
      </el-form-item>
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
        <el-button v-if="showReset" @click="resetForm()">Reset</el-button>
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

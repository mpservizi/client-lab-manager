<script setup lang="ts">
import { PropType, reactive, ref, unref, watchEffect, onMounted } from 'vue';
import type { FormInstance, FormRules } from 'element-plus';
import { IItemMonitor, getDefaultModel } from '../models/ItemMonitor';
import { INormaForm } from '@src/modules/norme/models/Norma';
import StandardPicker from '@src/composables/StandardPicker.vue';
import { pa } from 'element-plus/lib/locale';

const emit = defineEmits(['m_submit', 'm_error', 'm_delete', 'm_cancel']);

interface IForm_standard_monitor {
  id: number;
  id_norma: number;
  norma: INormaForm;
  titolo_norma: string;
  data: Date;
  autore: string;
  fonte: string;
  note: string;
}

const model_form: IForm_standard_monitor = reactive(getFormDefault());
const titolo_form = ref('Standard monitor form');
const showDelete = ref(false);
const showReset = ref(false);
const showCancel = ref(true);

const props = defineProps({
  payload: Object as PropType<IItemMonitor>,
  norma: Object as PropType<INormaForm>,
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

watchEffect(() => {
  //Item monitor
  if (props.payload) {
    //Caso Edit form
    covertPayloadInFormModel(props.payload);
  } else {
    //Caso Add new item
    //Imposto valori defalu del model form
    Object.assign(model_form, getFormDefault());
  }

  //Norma del item selezionato
  if (props.norma) {
    model_form.titolo_norma = props.norma.title;
  } else {
    model_form.titolo_norma = '';
  }

  //Titolo del form
  titolo_form.value = props.titolo;

  //Visibilità bottoni
  showDelete.value = props.delete_btn;
  showReset.value = props.reset_btn;
  showCancel.value = props.cancel_btn;
});

//Vari default per form model
function getFormDefault(): IForm_standard_monitor {
  return {
    id: undefined,
    id_norma: undefined,
    norma: undefined,
    titolo_norma: '',
    data: new Date(),
    autore: '',
    fonte: '',
    note: '',
  };
}

//Convert payload in campi del model form
function covertPayloadInFormModel(payload: IItemMonitor) {
  model_form.id = payload.id;
  model_form.id_norma = payload.id_norma;
  model_form.norma = payload.norma;
  model_form.autore = payload.who;
  model_form.fonte = payload.source;
  model_form.note = payload.note;
  model_form.data = payload.last_update;
}

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
  Object.assign(model_form, getFormDefault());
}

//Crea oggetto IItemMonitor in base ai campi del form
function creaRisultatoForm(): IItemMonitor {
  let result = getDefaultModel();

  result.id = model_form.id;
  result.id_norma = model_form.id_norma;
  result.norma = model_form.norma;

  result.last_update = model_form.data;
  result.who = model_form.autore;
  result.source = model_form.fonte;
  result.note = model_form.note;

  return result;
}

//Tasto save in dialog norma
function handleSavePicker(result: INormaForm | INormaForm[] | undefined) {
  //@ts-ignore
  model_form.norma = result;
  model_form.id_norma = model_form.norma.id;
  model_form.titolo_norma = model_form.norma.title;
}

//Riferimento al tempalte del form, non usato
const ref_form = ref<FormInstance>();

//Regole validazione campi, il nome del campo deve corrispondere al campo del formModelObj
const rules = reactive<FormRules>({
  titolo_norma: [
    {
      required: true,
      message: 'Please select an standard',
      trigger: 'change',
    },
  ],
  autore: [
    {
      required: true,
      message: 'Please select person name',
      trigger: 'change',
    },
  ],
  fonte: [
    {
      required: true,
      message: 'Please enter data source',
      trigger: 'change',
    },
  ],
});
</script>

<template>
  <div class="form_box">
    <div>
      <h1>{{ titolo_form }}</h1>
      <el-divider></el-divider>
    </div>
    <el-form
      :model="model_form"
      label-width="150px"
      ref="ref_form"
      :rules="rules"
    >
      <!-- Norma -->
      <el-form-item label="Standard" prop="titolo_norma">
        <StandardPicker
          @m_submit="handleSavePicker"
          :showSelezione="false"
          :selected="model_form.id_norma"
        ></StandardPicker>
        <el-input
          v-model="model_form.titolo_norma"
          placeholder="Standard title"
          :readonly="true"
        />
      </el-form-item>
      <!-- Author -->
      <el-form-item label="Author" prop="autore">
        <el-input
          v-model="model_form.autore"
          placeholder="Check made by"
          clearable
        />
      </el-form-item>
      <!-- Source -->
      <el-form-item label="Source" prop="fonte">
        <el-input v-model="model_form.fonte" placeholder="Source" clearable />
      </el-form-item>
      <!-- Note -->
      <el-form-item label="Notes" prop="note">
        <el-input v-model="model_form.note" placeholder="Source" clearable />
      </el-form-item>
      <!-- Last update -->
      <el-form-item label="Last update">
        <el-date-picker
          v-model="model_form.data"
          placeholder="Date of last check"
          type="date"
          :default-value="new Date()"
          format="DD/MM/YYYY"
        />
      </el-form-item>
      <!-- Save button -->
      <el-form-item>
        <el-button type="success" @click="submitForm(ref_form)">Save</el-button>

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

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import type { FormInstance, FormRules } from 'element-plus';
import { useNormeStore } from './../store';

const emit = defineEmits(['m_submit', 'm_error']);
const store = useNormeStore();

let listaComitee = ref([]);
const props = defineProps({
  payload: Object,
});

onMounted(async () => {
  listaComitee.value = await store.getListaComitees();
  console.log(props);
});

//Oggetto usato come model del form
let tmpNorma = reactive({
  id: 0,
  prefix: '',
  tipo: '',
  comitee: '',
  standard: '',
  year: 0,
  ammendments: '',
  title: '',
});

//Riferimento al tempalte del form, non usato
const ruleFormRef = ref<FormInstance>();
//Regole validazione campi
const rules = reactive<FormRules>({
  standard: [
    {
      required: true,
      message: 'Please input standard number',
      trigger: 'blur',
    },
  ],
  comitee: [
    {
      required: true,
      message: 'Please input select a comitee',
      trigger: 'blur',
    },
  ],
  tipo: [
    {
      required: true,
      message: 'Please input select standard tupe',
      trigger: 'blur',
    },
  ],
});

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      salvaNorma();
    } else {
      console.log('error submit!', fields);
      emit('m_error', fields);
    }
  });
};

async function salvaNorma() {
  let comiteeSelected = getComiteeByTitle(tmpNorma.comitee);
  let pojo = {
    title: titoloNorma(),
    idComitee: comiteeSelected.id,
    year: tmpNorma.year,
    standard: tmpNorma.standard,
    prefix: tmpNorma.prefix,
    ammendments: tmpNorma.ammendments,
    type: tmpNorma.tipo,
  };
  emit('m_submit', pojo);
}

function getComiteeByTitle(titolo: string) {
  return listaComitee.value.find((item) => item.title == titolo);
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};

function titoloNorma() {
  if (tmpNorma.standard == '') return '';
  let txt = `${tmpNorma.comitee} ${tmpNorma.standard}:${tmpNorma.year}`;
  if (tmpNorma.ammendments) {
    txt = `${txt}+${tmpNorma.ammendments}`;
  }
  if (tmpNorma.prefix) {
    txt = `${tmpNorma.prefix} ${txt}`;
  }
  return txt.toUpperCase();
}
</script>

<template>
  <div class="form_box">
    <div>
      <h1>Add new standard</h1>
      <el-divider></el-divider>
    </div>
    <el-form
      ref="ruleFormRef"
      :model="tmpNorma"
      :rules="rules"
      label-width="150px"
      class="demo-ruleForm"
    >
      <el-form-item label="Type" prop="tipo">
        <el-select
          v-model="tmpNorma.tipo"
          class="m-2"
          placeholder="Select standard type"
          size="default"
        >
          <el-option label="Draft" value="Draft" />
          <el-option label="Standard" value="Standard" />
        </el-select>
      </el-form-item>
      <el-form-item label="Comitee" prop="comitee">
        <el-select
          v-model="tmpNorma.comitee"
          class="m-2"
          placeholder="Select a comitee"
          size="default"
        >
          <el-option
            v-for="item in listaComitee"
            :key="item.id"
            :label="item.title"
            :value="item.title"
          />
        </el-select>
      </el-form-item>

      <el-form-item label="Stadard number" prop="standard">
        <el-input
          v-model="tmpNorma.standard"
          placeholder="Standard number"
          clearable
        />
      </el-form-item>

      <el-form-item label="Year" prop="year">
        <el-input-number v-model="tmpNorma.year" :min="1900" :max="9999" />
      </el-form-item>

      <el-form-item label="Ammendments" prop="ammendments">
        <el-input
          v-model="tmpNorma.ammendments"
          placeholder="Ammendments"
          clearable
        />
      </el-form-item>
      <el-form-item label="Prefix" prop="prefix">
        <el-input v-model="tmpNorma.prefix" placeholder="Prefix" clearable />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)"
          >Create</el-button
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

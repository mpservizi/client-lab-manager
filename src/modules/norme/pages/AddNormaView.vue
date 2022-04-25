<script setup lang="ts">
import { reactive, ref } from 'vue';
import { NOMI_ROUTES } from './../index';
import type { FormInstance, FormRules } from 'element-plus';

const formSize = ref('default');
const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
  comitee: '',
  standard: '',
  year: 1900,
  ammendments: '',
  title: '',
});

const rules = reactive<FormRules>({
  standard: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
  ],
});

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!');
    } else {
      console.log('error submit!', fields);
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};

const SPAZIO_COLONNE = 20;

let listaComitee = [
  { id: 1, title: 'IEC' },
  { id: 2, title: 'EN' },
  { id: 3, title: 'CEI' },
  { id: 4, title: 'IEC EN' },
];

let tmpNorma = reactive({
  id: 0,
  comitee: '',
  standard: '',
  year: 1900,
  ammendments: '',
  title: '',
});

function titoloNorma() {
  let txt = `${tmpNorma.comitee} ${tmpNorma.standard}:${tmpNorma.year}${tmpNorma.ammendments}`;
  return txt.toUpperCase();
}

function saveNorma() {
  tmpNorma.title = titoloNorma();
  console.log(tmpNorma);
}
</script>

<template>
  <div>
    <div><router-link :to="{ name: NOMI_ROUTES.LIST }">Back</router-link></div>
    <div class="form_box">
      <el-form
        ref="ruleFormRef"
        :model="tmpNorma"
        :rules="rules"
        label-width="150px"
        class="demo-ruleForm"
      >
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

        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)"
            >Create</el-button
          >
          <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style scoped>
.form_box {
  width: 600px;
}
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}
</style>

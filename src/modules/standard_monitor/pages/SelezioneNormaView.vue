<script setup lang="ts">
import { INormaForm } from '@src/modules/norme/models/Norma';
import { onMounted, reactive, ref } from 'vue';
import StandardPicker from '@src/composables/StandardPicker.vue';
const pronto = ref(false);

onMounted(async () => {
  pronto.value = true;
});

function handleSavePicker(result: INormaForm | INormaForm[] | undefined) {
  console.log(result);
}

function handleErrorPicker(msg: string) {
  console.log('Errore piccker : ' + msg);
}

function handleCancelPicker() {
  console.log('Cncel clicked');
}
</script>
<template>
  <div>
    <div>
      <StandardPicker
        multiple
        @m_submit="handleSavePicker"
        @m_error="handleErrorPicker"
        @m_cancel="handleCancelPicker"
      ></StandardPicker>
      <p>Selezione con item singolo</p>
      <StandardPicker></StandardPicker>
      <div>
        <p>Altri controlli</p>
        <p>Altri controlli</p>
        <p>Altri controlli</p>
      </div>
    </div>
    <!-- <p>Selezione Singola xxxx</p>
    <div>
      <StandardPicker
        @m_submit="handleSavePicker"
        @m_error="handleErrorPicker"
        @m_cancel="handleCancelPicker"
      ></StandardPicker>
    </div> -->
  </div>
</template>

<style scoped></style>

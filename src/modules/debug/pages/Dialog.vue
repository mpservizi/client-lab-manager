<script setup lang="ts">
import { computed, onMounted, reactive, ref, unref } from 'vue';
import ServiceNorme from '@src/modules/norme/service';
import { INormaForm } from '@src/modules/norme/models/Norma';

const pronto = ref(false);
const emit = defineEmits(['m_submit', 'm_error', 'm_cancel', 'm_close']);

// const props = defineProps({
//   multiple: {
//     type: Boolean,
//     required: false,
//     default: false,
//   },
// });

//Dialog control
const dialogVisible = ref(false);

onMounted(async () => {
  pronto.value = true;
  // dialogVisible.value = true;
});
</script>
<template>
  <div>
    <div>Debug Dialog</div>
    <div>
      <button @click="dialogVisible = true">OpenDialog</button>
      <button @click="dialogVisible = false">CloseDialog</button>
    </div>
    <Teleport to="#div_dialog">
      <div class="modal" v-if="dialogVisible">
        <h1>Titolo dialog</h1>
        <div>Body</div>
        <div>Fotter</div>
      </div>
    </Teleport>
  </div>
</template>
<style scoped>
.modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
  background-color: red;
}
.box_dialog_1 {
  /* width: 500px; */
  height: 800px;
  background-color: red;
}
.el-select-dropdown {
  background-color: aquamarine;
  /* z-index: 3000; */
}
</style>

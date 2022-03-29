<script setup>
import { computed, onMounted, ref } from 'vue';

const props = defineProps({
  items: Array,
  titolo: String,
});
//Items selezionati
const checkList = ref([]);

function seleziona(item) {
  if (checkList.value.indexOf(item) > -1) return;
  checkList.value.push(item);
}
function deseleziona(item) {
  let pos = checkList.value.indexOf(item);
  if (pos > -1) {
    checkList.value.splice(pos, 1);
  }
}

function selectAll() {
  checkList.value = [...props.items];
}
function selectNone() {
  checkList.value = [];
}
defineExpose({
  seleziona,
  deseleziona,
  getSelected: () => {
    return checkList.value;
  },
});
</script>
<template>
  <el-space wrap>
    <el-card class="card_box">
      <template #header>
        <div class="card-header">
          <p class="titolo">{{ props.titolo }}</p>
          <el-button class="button" type="text" @click="selectAll"
            >All</el-button
          >
          <el-button class="button" type="text" @click="selectNone"
            >None</el-button
          >
        </div>
      </template>
      <el-checkbox-group v-model="checkList">
        <el-row>
          <el-col v-for="item in props.items" :key="item">
            <el-checkbox :label="item" />
          </el-col>
        </el-row>
      </el-checkbox-group>
    </el-card>
  </el-space>
</template>
<style>
/* classe interna applicata al header */
.el-card__header {
  padding: 5px !important;
}
.card-header {
  padding: 0px;
}
.titolo {
  padding: 0px;
  margin: 0px;
  font-weight: 900;
}
</style>

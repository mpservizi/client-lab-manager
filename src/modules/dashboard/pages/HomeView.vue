<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import CardModulo from './../components/CardModulo.vue';
import { APP_PATHS } from '@src/modules/mod_paths';
const router = useRouter();
onMounted(() => {});

const routeList = {
  1: APP_PATHS.norme.LIST,
  2: APP_PATHS.studio_norme.HOME,
  3: APP_PATHS.products_involved.HOME,
  4: APP_PATHS.conformity_matrix.HOME,
};
function apri(id: number) {
  console.log(id);
  router.push({ name: routeList[id], params: { json: '' } });
}
</script>

<template>
  <div>
    <div>
      <el-row><div class="box">Select the module</div></el-row>
      <el-row :gutter="20">
        <CardModulo @click="apri(1)">1- Standard list</CardModulo>
        <CardModulo @click="apri(2)">2- Standard evolution</CardModulo>
        <CardModulo @click="apri(3)">3- Products involved</CardModulo>
        <CardModulo @click="apri(4)">4- Products conformity</CardModulo>
      </el-row>
    </div>
  </div>
</template>

<style scoped>
.box {
  margin: 10px;
  font-size: larger;
}
</style>

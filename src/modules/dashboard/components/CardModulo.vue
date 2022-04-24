<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
</script>

<template>
  <div>
    <el-col>
      <el-card shadow="hover" class="card_box"
        ><slot>Card Modulo</slot></el-card
      >
    </el-col>
  </div>
</template>

<style scoped>
.card_box {
  /* height: 100px; */
  /* width: 300px; */
  text-align: center;
}
</style>

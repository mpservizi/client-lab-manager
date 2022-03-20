<script setup>
import { ref } from 'vue';
import Navbar from './components/NavBar.vue';
import BaseHeader from './components/layouts/BaseHeader.vue';
</script>

<template>
  <BaseHeader />
  <div style="display: flex">
    <BaseSide />
    <div class="m_router">
      <router-view></router-view>
    </div>
  </div>
  <div class="m_footer"></div>
</template>
<style>
#app {
  text-align: center;
  color: var(--el-text-color-primary);
  min-height: 100%;
}
.element-plus-logo {
  width: 50%;
}
.m_router {
  padding-top: 5px;
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 5px;
}
.m_footer {
  height: 20px;
}
</style>

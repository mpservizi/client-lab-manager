<script setup>
import { ref } from 'vue';
import Navbar from './components/NavBar.vue';
import BaseHeader from './components/layouts/BaseHeader.vue';
</script>

<template>
  <el-container class="m_container">
    <el-aside width="80px"><Navbar /></el-aside>
    <el-container>
      <!-- Default height 60px -->
      <!-- <el-header class="m_header"><BaseHeader /></el-header> -->
      <el-main class="m_main"
        ><router-view class="m_router"></router-view
      ></el-main>
      <!-- <el-footer height="30px" class="m_footer"></el-footer> -->
    </el-container>
  </el-container>
</template>
<style lang="scss">
@import 'src/styles/index.scss';
/* App container */
#app {
  color: var(--el-text-color-primary);
  position: absolute;
  top: 0;
  left: 0;
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
}
/* Main view container */
.m_container {
  height: 100%;
}

/* Footer in basso */
.m_footer {
  /* Tolgo default padding */
  padding: 0 !important;
}

/* Contenuto centrale della pagina */
.m_main {
  /* Tolgo default padding ai lati */
  padding: 5px !important;
  background-color: $vuoto-bg-color;
}
.m_side {
  background-color: $vuoto-bg-color;
}
.m_header {
  /* Tolgo default padding ai lati */
  padding: 0 !important;
  background-color: $vuoto-bg-color;
}
/* Router view */
.m_router {
  background-color: $vuoto-bg-color;
  height: 95%; /* evita scroll bar verticale, cambiare se dà problemi */
  padding: 0px 10px;
}
</style>

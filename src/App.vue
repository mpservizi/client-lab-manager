<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Navbar from './components/NavBar.vue';
import BaseHeader from './components/layouts/BaseHeader.vue';
import { getConfig } from '@src/loader';
//Websocket client
import { initWebSocket } from './api_websocket';

const pronto = ref(false);
const errore = ref(false);

onMounted(async () => {
  // await init();
  //Forzo il valore per fake
  pronto.value = true;
});

//Inizializzo web socket client
async function init() {
  //Url del web server
  const config = getConfig();
  const SERVER_URL = config.SERVER_URL;
  let result = await initWebSocket(SERVER_URL);
  if (result) {
    pronto.value = true;
  } else {
    errore.value = true;
  }
}
</script>

<template>
  <div>
    <div v-if="errore">
      <h1>Errore connessione al server</h1>
    </div>
    <div v-if="pronto">
      <el-container class="m_container">
        <el-aside width="80px"><Navbar /></el-aside>
        <el-container>
          <!-- Default height 60px -->
          <!-- <el-header class="m_header"><BaseHeader /></el-header> -->
          <el-main class="m_main">
            <router-view class="m_router"></router-view
          ></el-main>
          <!-- <el-footer height="30px" class="m_footer"></el-footer> -->
        </el-container>
      </el-container>
    </div>
    <div v-else>
      <div v-if="!errore">Loading...</div>
    </div>
  </div>
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
/* Main view container altezza tutta la visuale */
.m_container {
  height: 100vh;
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

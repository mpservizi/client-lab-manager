<template>
  <el-menu
    router
    class="menu-verticale"
    :collapse="isCollapse"
    style="width: 100%; height: 100%"
  >
    <div>
      <el-image
        style="width: 64px; height: 64px; padding: 5px"
        :src="logo_path"
        fit="fill"
      ></el-image>
    </div>
    <el-menu-item index="1" route="/" color="orange">
      <el-icon><home-filled /></el-icon>
      <!-- <template #title>Homepage</template> -->
    </el-menu-item>
    <!-- <el-menu-item>
      <el-icon><icon-menu /></el-icon>
      <template #title>Apps</template>
    </el-menu-item>
    <el-menu-item>
      <el-icon><setting /></el-icon>
      <template #title>Admin</template>
    </el-menu-item> -->
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Menu as IconMenu, HomeFilled, Setting } from '@element-plus/icons-vue';

const isCollapse = ref(true);
const logo_path = new URL('../assets/app-logo.png', import.meta.url).href;
</script>

<style lang="scss">
@import 'src/styles/index.scss';
.el-menu-item {
  color: $menu-item-color !important;
}
</style>

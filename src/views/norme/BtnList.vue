<script setup>
import { NOMI_ROUTES } from './index';
import RouteLinkBtn from 'components/RouteLinkBtn.vue';
</script>

<template>
  <div>
    <RouteLinkBtn label="Home" :routeName="NOMI_ROUTES.HOME" />
    <slot></slot>
  </div>
</template>

<style></style>

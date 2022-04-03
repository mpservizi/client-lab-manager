<script setup>
import { computed } from '@vue/reactivity';
import { useRouter } from 'vue-router';
const router = useRouter();

const props = defineProps({
  routeName: String,
  routePath: String,
  label: String,
  payload: Object,
});

function naviga() {
  let obj = {
    name: props.routeName,
    params: {},
  };

  if (props.routePath) {
    obj.path = props.routePath;
  }

  if (props.payload) {
    let result = undefined;
    try {
      result = JSON.stringify(props.payload);
    } catch (error) {
      console.log('Errore parsing payload route');
      console.log(error);
    }
    obj.params = { json: result };
  }

  router.push(obj);
}
</script>

<template>
  <el-button type="info" @click="naviga" color="#626aef" style="color: white">{{
    props.label || 'MyButton'
  }}</el-button>
</template>

<style scoped></style>

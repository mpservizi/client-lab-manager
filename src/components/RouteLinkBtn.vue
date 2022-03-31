<script setup>
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
  <button @click="naviga">{{ props.label || 'MyButton' }}</button>
</template>

<style scoped>
button {
  padding: 5px;
  margin: 5px;
}
</style>

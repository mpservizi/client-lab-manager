<script setup>
import { inject, onMounted } from 'vue';

const emit = defineEmits(['cambio']);

const suite = inject('suite');
// const sc = inject('scheduler');

onMounted(() => {
  const calendar = new suite.Calendar('cal', {
    width: '400',
    css: 'dhx_widget--bordered',
  });
  calendar.events.on('change', function (date, oldDate, byClick) {
    console.log('Change selection from ' + oldDate + ' to ' + date);
    emit('cambio', date);
  });
});
</script>

<template>
  <div id="cal"></div>
</template>

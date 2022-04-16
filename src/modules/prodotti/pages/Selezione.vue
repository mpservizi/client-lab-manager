<template>
  <div>
    <div>Range</div>

    <div>
      <el-select
        v-model="range"
        clearable
        placeholder="Select"
        @change="reset(0)"
      >
        <el-option
          v-for="item in ranges"
          :key="item"
          :label="item"
          :value="item"
        />
      </el-select>
    </div>

    <div>Family</div>
    <div>
      <el-select
        v-model="family"
        clearable
        placeholder="Select"
        @change="reset(1)"
      >
        <el-option
          v-for="item in familys"
          :key="item"
          :label="item"
          :value="item"
        />
      </el-select>
    </div>

    <div>Sub Family</div>
    <div>
      <el-select
        v-model="sub_family"
        clearable
        placeholder="Select"
        @change="reset(2)"
      >
        <el-option
          v-for="item in lista_prova"
          :key="item"
          :label="item"
          :value="item"
        />
      </el-select>
    </div>
    <div>
      <el-button @click="save">Save</el-button>
    </div>
    <div>
      <p>Range : {{ range }}</p>
      <p>Family : {{ family }}</p>
      <p>Sub Family : {{ sub_family }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue';

const emit = defineEmits(['save']);

const range = ref('');
const family = ref('');
const sub_family = ref('');

const ranges = ['Gallery', 'Systo', 'Waterproof'];
const familys = ['Switch', 'Socket'];
const switch_family = ['1 way', '2 way', '2 pole', 'Intermediate'];
const socket_family = ['Earth pin', 'Earth resiliant'];

const lista_prova = computed(() => {
  return socket_family;
});

onMounted(() => {});

function reset(childIndex: number) {
  switch (childIndex) {
    case 0:
      family.value = '';
      sub_family.value = '';
      break;
    case 1:
      sub_family.value = '';
      break;
    case 2:
      break;

    default:
      break;
  }
}

function save() {
  let result = [range.value, family.value, sub_family.value];
  emit('save', result);
}
</script>

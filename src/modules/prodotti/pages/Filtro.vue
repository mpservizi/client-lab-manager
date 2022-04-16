<template>
  <div>
    <slot name="ui">
      <div v-for="campo in props.campiFiltro">
        <p>{{ campo }}</p>
        <el-select
          v-model="result[campo]"
          clearable
          placeholder="Select"
          @change="reset(0)"
        >
          <el-option
            v-for="item in 5"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
      </div>
    </slot>
    <div>
      <el-button @click="save">Filter</el-button>
    </div>
    <slot name="result">
      <div>
        <p>Range : {{ placeholder }}</p>
        <p>Family : {{ placeholder }}</p>
        <p>Sub Family : {{ placeholder }}</p>
      </div>
    </slot>
    <div>
      {{ result }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, watch, onMounted } from 'vue';

const emit = defineEmits(['save']);
const props = defineProps({
  //lista con tutti i dati
  lista: {
    type: Array,
    required: true,
    default() {
      return [];
    },
  },
  //campi su qui eseguire il filtro
  //indicare campo e label da usare
  campiFiltro: {
    type: Object,
    required: true,
    default() {
      return {};
    },
  },
});

const listaValori = props.lista;
const placeholder = ref('Palceholder');
const result = ref({});
const elencoValori = ref({});
// const range = ref('');
// const family = ref('');
// const sub_family = ref('');

// const ranges = ['Gallery', 'Systo', 'Waterproof'];
// const familys = ['Switch', 'Socket'];
// const switch_family = ['1 way', '2 way', '2 pole', 'Intermediate'];
// const socket_family = ['Earth pin', 'Earth resiliant'];

// const lista_prova = computed(() => {
// });

onMounted(() => {
  console.log(props.lista);
  // @ts-ignore
  let v = valoriUnivociCampi(props.lista, props.campiFiltro);
});

function valoriUnivociCampi(listaValori: any[], campi: {}) {
  let listaCampi = { ...campi };
  let stores = {};
  for (const key in listaCampi) {
    stores[key] = new Set();
  }
  listaValori.forEach(function (item) {
    for (const key in listaCampi) {
      stores[key].add(item[key]);
    }
  });

  let result = {};
  for (const key in stores) {
    result[key] = Array.from[stores[key]];
  }

  return result;
}

function reset(childIndex: number) {
  // switch (childIndex) {
  //   case 0:
  //     family.value = '';
  //     sub_family.value = '';
  //     break;
  //   case 1:
  //     sub_family.value = '';
  //     break;
  //   case 2:
  //     break;
  //   default:
  //     break;
  // }
}

/**
 * Restituisce un oggetto con campo e criterio scelto
 */
function save(): any {}
{
  let result = {};
  emit('save', result);
}

watch(props.lista, (newValore, oldValore) => {
  console.log('Lista props cambiata');
});
watch(
  () => listaValori.length,
  () => {
    listaValori.forEach((item) => {
      console.log(item);
    });
  }
);
</script>

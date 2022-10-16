<script setup lang="ts">
const props = defineProps<{
  initial: number
}>()

const { count, inc, dec } = useCounter(props.initial)
</script>

<template>
  <div>
    {{ count }}
    <va-button color="primary" class="inc px-2rem" @click="inc()">
      +
    </va-button>
    <va-button color="danger" class="dec px-2rem" @click="dec()">
      -
    </va-button>
  </div>
</template>

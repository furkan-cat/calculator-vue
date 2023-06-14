<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  title: { type: [String, Number], default: null },
  click: { type: Function, default: null }
})
</script>

<template>
  <button @click="props.click" class="btn">
    <slot v-if="props.title">{{ props.title }} </slot>
    <slot v-else>
      <v-icon name="co-delete" class="icon" />
    </slot>
  </button>
</template>

<style scoped>
.btn {
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 20px;
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  background-color: gray;
  cursor: pointer;
}

.operator {
  background-color: orange;
}

.icon {
  width: 34px;
  height: auto;
}
</style>

<template>
  <div :style="{ color: color }">
    {{ text }}
  </div>
</template>
<script setup lang="ts">
import { defineProps, ref } from "vue";
defineProps<{
  color: "red" | "blue";
}>();
const text = ref<string>("这是默认文本");
const changeColor = (val: string) => {
  text.value = val;
};
defineEmits({ changeColor });
</script>

<template>
  <button @click="handleButton">{{ text }}</button>
</template>

<script lang="ts" setup>
defineProps({text: String})
const emits = defineEmits<{ (e: 'handleButton'): void }>();
const handleButton = () => {
  emits("handleButton");
};

</script>

<style scoped>
button {
  padding: 5px 10px;
  cursor: pointer;
}
</style>

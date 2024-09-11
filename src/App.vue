<template>
  <div class="w-full overflow-x-hidden">
    <navbarComponent />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import navbarComponent from "./shared/components/navbar/navbar.component.vue";
</script>

<style scoped></style>

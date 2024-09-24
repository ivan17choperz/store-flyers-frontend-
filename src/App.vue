<template>
  <div class="w-full overflow-x-hidden">
    <navbarComponent />
    <Transition>
      <RouterView />
    </Transition>
    <footerComponent />
  </div>
</template>

<script setup lang="ts">
import navbarComponent from "./shared/components/navbar/navbar.component.vue";
import footerComponent from "./shared/components/footer/footer.component.vue";
import { onMounted, ref } from "vue";

const paypalLoaded = ref(false);
const errorMessage = ref("");

onMounted(async () => {});
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>

<template>
  <div class="mx-auto overflow-y-auto ">
    <img :src="`public/tratados/covers/${productId}.jpg`" alt="">
  </div>
</template>

<script setup lang="ts">
defineProps({
  productId: {
    type: String,
    required: true,
  },
});
</script>

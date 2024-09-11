<template>
  <div
    class="w-[300px] max-h-[500px] border border-sky-700 rounded-3xl flex flex-col items-center p-5"
  >
    <div class="header-product">
      <img
        :src="'public/tratados/covers/' + product.id + '.jpg'"
        class="h-[200px]"
        :alt="`${product.id}`"
      />
    </div>
    <div class="body-product w-full text-center">
      <a :href="`store/product/${productCard.id_product}`" class="font-bold text-lg text-sky-700">{{ productCard.title }}</a>
      <p>{{ productCard.description }}</p>
    </div>
    <div class="footer-product flex justify-between items-center w-full mt-5">
      <p class="font-bold">${{ productCard.price }}</p>
      <button
        class="border border-sky-700 text-sky-700 rounded-xl px-5 py-2 hover:bg-sky-700 hover:text-white transition-colors"
      >
        Añadir al carrito
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const productCard = {
  id_product: props.product.id,
  img_url: "public/tratados/covers/" + props.product.id + ".jpg",
  title: props.product.title,
  description: props.product.description,
  price: props.product.price,
};


</script>

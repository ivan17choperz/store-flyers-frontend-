<template>
  <div class=" px-5 pb-20 pt-5">
    <h1 class="text-3xl font-bold text-sky-600 capitalize">
      lista de tratados evangelísticos. 
    </h1>
    <div v-if="products.length > 0" class="mt-5">
      <ul
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-5 justify-items-center items-center"
      >
        <li v-for="product in products" :key="product.id">
          <CardProductComponent :product="product" />
        </li>
      </ul>
      <img  
      class="mt-10"
      src="/public/media/banner_international.jpg" alt="banner_instructions">
    </div>
    <div v-else>
      <p>No products available.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getProducts } from "../../../core/services/products.services.ts";
import { ref, onMounted } from "vue";
import CardProductComponent from "../components/card-product/card-product.component.vue";

// Reactive product list
const products = ref<any>([]);

// Fetch products inside onMounted lifecycle hook
onMounted(async () => {
  const { data, status } = await getProducts();

  if (status === 200) {
    products.value = data;
  } else {
    products.value = [];
  }
  
});
</script>

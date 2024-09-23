<template>
  <div class="px-5 pb-20 pt-5 relative">
    <h1 class="text-3xl ml-5 font-bold text-sky-600 capitalize">
      listado de tratados evangelísticos.
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
        class="mt-10 mx-auto"
        src="/public/media/banner_international.jpg"
        alt="banner_instructions"
      />
    </div>
    <div v-else>
      <p>No products available.</p>
    </div>
    <Transition>
      <button
        v-if="!showShoppingCart"
        @click="showShoppingCart = !showShoppingCart"
        class="button-cart fixed bottom-16 right-5 p-3 bg-white rounded-full shadow-2xl border border-sky-600 flex items-center justify-center"
      >
        <i>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
          >
            <path
              fill="#1a73c7"
              d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.99 1.99 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921"
            />
            <circle cx="10.5" cy="19.5" r="1.5" fill="#1a73c7" />
            <circle cx="17.5" cy="19.5" r="1.5" fill="#1a73c7" />
          </svg>
        </i>
      </button>
    </Transition>
  </div>
  <Transition>
    <CartShoppingComponent
      v-if="showShoppingCart"
      @hidden-cart-shopping="hiddenShopingCart"
    />
  </Transition>
</template>

<script setup lang="ts">
import { getProducts } from "../../../core/services/products.services.ts";
import { ref, onMounted } from "vue";

// Components
import CardProductComponent from "../components/card-product/card-product.component.vue";
import CartShoppingComponent from "../components/cart-shopping/cart-shopping.component.vue";

// Reactive product list
const products = ref<any>([]);
const showShoppingCart = ref<boolean>(false);
// Fetch products inside onMounted lifecycle hook
onMounted(async () => {
  const { data, status } = await getProducts();

  if (status === 200) {
    products.value = data;
  } else {
    products.value = [];
  }
});

const hiddenShopingCart = (data: boolean) => {
  showShoppingCart.value = data;
};
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.button-cart {
  z-index: 10000;
}
</style>

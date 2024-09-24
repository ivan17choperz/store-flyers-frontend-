<template>
  <div
    class="fixed z-50 w-11/12 lg:w-full h-full top-0 left-0 flex justify-center items-center"
  >
    <div
      class="cart overflow-y-auto w-[500px] h-[650px] overflow-hidden p-5 rounded-2xl shadow-xl border border-sky-700 bg-white flex flex-col justify-between items-center"
    >
      <div class="header-cart w-full flex items-center justify-between">
        <h2 class="text-red text-2xl font-bold text-sky-600">
          Listado de productos
        </h2>
        <button
          @click="hiddenShoppingCart()"
          class="w-8 h-8 p-3 rounded-full bg-slate-200 flex items-center justify-center text-sky-600 font-bold"
        >
          X
        </button>
      </div>

      <div class="body-cart w-full mt-5 overflow-y-auto max-h-[270px]">
        <ul class="flex flex-col items-center justify-start">
          <li
            v-for="product in listProducts"
            class="w-full h-[130px] border rounded-lg mb-2 border-sky-600 flex items-center px-5 justify-between"
          >
            <div class="img w-2/12">
              <img :src="product.img_url" class="h-20" alt="" />
            </div>
            <div class="info w-8/12 flex flex-col">
              <p class="text-lg font-bold text-sky-600 truncate">
                {{ product.title }}
              </p>
              <p class="text-lg text-neutral-700">Paquete con 100 unidades</p>

              <input
                type="number"
                placeholder="Cantidad"
                min="1"
                max="100"
                class="border border-sky-600 rounded-lg p-2 text-sky-600"
                v-model="product.quantity"
                @input="(event) => updateQuantityProduct(event, product)"
              />
            </div>
            <div class="actions w-2/12 flex justify-end">
              <button @click="removeProduct(product)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 16 16"
                >
                  <g fill="#f10e0e">
                    <path
                      d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"
                    />
                    <path
                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"
                    />
                  </g>
                </svg>
              </button>
            </div>
          </li>

          <p
            class="text-center text-slate-400 text-2xl"
            v-if="listProducts.length === 0"
          >
            No hay productos
          </p>
        </ul>
      </div>

      <div
        class="border-t border-sky-600 w-full flex flex-col justify-center items-start pt-5"
      >
        <p class="text-lg font-bold text-sky-600">
          Total por productos: {{ pipeCurrency(cartStore.cartTotalPrice) }}
        </p>
        <p class="text-lg font-bold text-sky-600">
          Envio: {{ pipeCurrency(10000) }}
        </p>
        <p class="text-lg font-bold text-sky-600">
          Total: {{ pipeCurrency(cartStore.cartTotalPrice + 10000) }}
        </p>
      </div>
      <!-- 
      <div
        class="footer-cart border-t border-sky-600 w-full flex justify-between items-center pt-5"
      >
        <button
          :disabled="cartStore.cartProducts.length === 0"
          class="border bg-sky-600 text-white rounded-xl px-5 py-2 hover:bg-sky-800 font-bold transition-colors"
        >
          Proceder a ordenar
        </button>
        <button
          @click="hiddenShoppingCart()"
          class="border border-sky-700 text-sky-700 rounded-xl px-5 py-2 hover:bg-sky-700 hover:text-white transition-colors"
        >
          Seguir comprando
        </button>
      </div> -->

      <div class="">
        <!-- <form
          action="https://www.paypal.com/ncp/payment/GUEDM9BNX6DXU"
          method="post"
          target="_top"
          style="
            display: inline-grid;
            justify-items: center;
            align-content: start;
            gap: 0.5rem;
          "
        >
          <input class="pp-GUEDM9BNX6DXU" type="submit" value="Comprar ahora" />
          <img src=https://www.paypalobjects.com/images/Debit_Credit_APM.svg
          alt="cards" />
          <section>
            Con la tecnología de
            <img
              src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg"
              alt="paypal"
              style="height: 0.875rem; vertical-align: middle"
            />
          </section>
        </form> -->

        <div id="paypal-container-GUEDM9BNX6DXU" class="w-full mt-5"></div>
        <div id="paypal-button-container" class="w-full mt-5"></div>
        <p v-if="errorMessage" class="text-red-600">{{ errorMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, onBeforeMount, onMounted, ref } from "vue";
import { IProduct } from "../../../../core/Interfaces/Product.interface";
import { useCartStore } from "../../../../core/store/shoping-store/cart.store";
import { loadScript } from "@paypal/paypal-js";

const cartStore = useCartStore();
const emits = defineEmits<{
  (e: "hidden-cart-shopping", value: boolean): void;
}>();
const listProducts = ref<IProduct[]>([]);
//const showPaymentMethod = ref(false);

const paypalLoaded = ref(false);
const errorMessage = ref("");
// Aqui viene el id de su negocio de paypal 👇👇👇👇
const client_paypal_id =
  "AYSwL3ppsqNF8NHFqeWXJ96A7Te_UUv50l310qKtXm4bSzoCcntBymWsUYntF5z14Kcm_NSt8fzRhhHz";
onMounted(() => {
  listProducts.value = cartStore.cartProducts;
});

onBeforeMount(() => {
  loadScript({ clientId: client_paypal_id }).then((paypal) => {
    if (paypal && paypal.Buttons) {
      paypal
        .Buttons({
          createOrder: createOrder,
          onApprove: onApprove,
        })
        .render("#paypal-button-container");
    }
  });
});

const createOrder = (data: any, actions: any) => {
  return actions.order.create({
    purchase_units: [
      {
        description: "Orden de tratados evangelisticos ",
        amount: {
          value: (cartStore.cartTotalPrice / 3900 + 2.4)
            .toPrecision(3)
            .toString(),
        },
      },
    ],
  });
};

const onApprove = (data: any, actions: any) => {
  console.log("onApprove");
  return actions.order.capture().then(function (details: any) {
    console.log(details);
  });
};

const hiddenShoppingCart = () => {
  emits("hidden-cart-shopping", false);
};

const removeProduct = (product: IProduct) => {
  cartStore.removeProductFromCart(product);
};

const updateQuantityProduct = (e: Event, product: IProduct) => {
  const inputValue = (e.target as HTMLInputElement).value;

  if (inputValue === "") {
    product.quantity = 1;
  }

  product.quantity = parseInt(inputValue);

  cartStore.updateQuantityProduct(product);
};

const pipeCurrency = (value: number) => {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
  }).format(value);
};
</script>

<style>
#paypal-button-container {
  width: 100%;
  max-width: 500px;
}
</style>

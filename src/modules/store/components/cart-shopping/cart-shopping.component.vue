<template>
  <div
    class="fixed z-50 w-full h-full top-0 left-0 flex justify-center items-center"
  >
    <div
      class="cart w-[500px] h-[500px] overflow-hidden p-5 rounded-2xl shadow-xl bg-white flex flex-col justify-between items-center"
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

      <div class="body-cart w-full mt-5 overflow-y-auto max-h-[200px]">
        <ul class="flex flex-col items-center justify-start">
          <li
            class="w-full h-[130px] border rounded-lg mb-2 border-sky-600 flex items-center px-5 justify-between"
          >
            <div class="img w-2/12">
              <img :src="'public/tratados/covers/1.jpg'" class="h-20" alt="" />
            </div>
            <div class="info w-8/12 flex flex-col">
              <p class="text-lg font-bold text-sky-600">Tratado de San Juan</p>
              <p class="text-lg text-neutral-700">Paquete con 100 unidades</p>

              <input
                type="number"
                placeholder="Cantidad"
                min="1"
                max="100"
                class="border border-sky-600 rounded-lg p-2 text-sky-600"
              />
            </div>
            <div class="actions w-2/12 flex justify-end">
              <button>
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
        </ul>
      </div>

      <div
        class="footer-cart border-t border-sky-600 w-full flex justify-between items-center pt-5"
      >
        <button
          class="border bg-sky-600 text-white rounded-xl px-5 py-2 hover:bg-sky-800 font-bold transition-colors"
        >
          Proceder a ordenar
        </button>
        <button
          class="border border-sky-700 text-sky-700 rounded-xl px-5 py-2 hover:bg-sky-700 hover:text-white transition-colors"
        >
          Seguir comprando
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from "vue";

const emits = defineEmits<{
  (e: "hidden-cart-shopping", value: boolean): void;
}>();

const hiddenShoppingCart = () => {
  emits("hidden-cart-shopping", false);
};
</script>

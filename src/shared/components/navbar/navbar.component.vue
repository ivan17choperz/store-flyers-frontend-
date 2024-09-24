<template>
  <nav class="flex items-center justify-center shadow-lg">
    <div class="w-10/12 flex items-center justify-between py-3">
      <a href="" class="w-6/12 mx-auto flex items-center justify-center lg:justify-start">
        <img
          src="../../../assets/brands/logo_tratados.png"
          class="h-10"
          alt=""
        />
      </a>
      <ul class="w-3/12 lg:flex items-center justify-around hidden">
        <router-link to="/home">
          <li
            class="cursor-pointer text-sky-700 font-bold border-b-2 border-white hover:border-sky-700 transition-colors text-lg"
          >
            Inicio
          </li>
        </router-link>

        <router-link to="/about-us">
          <li
            to="/about-us"
            class="cursor-pointer text-sky-700 font-bold border-b-2 border-white hover:border-sky-700 transition-colors text-lg"
          >
            Nosotros
          </li>
        </router-link>

        <router-link to="/store">
          <li
            to="/store"
            class="cursor-pointer text-sky-700 font-bold border-b-2 border-white hover:border-sky-700 transition-colors text-lg"
          >
            Tienda
          </li>
        </router-link>
      </ul>

      <button
        class="w-2/12 flex items-center justify-end lg:hidden"
        @click="showSidebar = !showSidebar"
      >
        <i>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 8 8"
          >
            <path fill="#1a73c7" d="M0 1v1h8V1zm0 2.97v1h8v-1zm0 3v1h8v-1z" />
          </svg>
        </i>
      </button>
    </div>
  </nav>

  <Transition
    enter-active-class="animate__animated animate__fadeInDown animate__faster"
    leave-active-class="animate__animated animate__fadeOutUp animate__faster"
  >
    <ul
      v-if="showSidebar"
      class="absolute bg-white flex flex-col items-center justify-around w-full top-[64px] z-50"
    >
      <router-link to="/home">
        <li
          @click="showSidebar = false"
          class="w-full cursor-pointer py-3 text-sky-600 font-bold border-b-2 border-white hover:border-sky-700 transition-colors text-lg"
        >
          Inicio
        </li>
      </router-link>

      <router-link to="/about-us">
        <li
          @click="showSidebar = false"
          to="/about-us"
          class="w-full cursor-pointer py-3 text-sky-600 font-bold border-b-2 border-white hover:border-sky-700 transition-colors text-lg"
        >
          Nosotros
        </li>
      </router-link>

      <router-link to="/store">
        <li
          @click="showSidebar = false"
          to="/store"
          class="w-full cursor-pointer py-3 text-sky-600 font-bold border-b-2 border-white hover:border-sky-700 transition-colors text-lg"
        >
          Tienda
        </li>
      </router-link>
    </ul>
  </Transition>
</template>

<script setup lang="ts">
import { ref, Transition } from "vue";

const showSidebar = ref<boolean>(false);
</script>

<style scoped></style>

<template>
  <nav class="flex items-center justify-center shadow-lg ">
    <div class="w-10/12 flex items-center justify-between py-3">
      <a href="" class="w-6/12">
        <img
          src="../../../assets/brands/logo_tratados.png"
          class="h-10"
          alt=""
        />
      </a>
      <ul class="w-3/12 flex items-center justify-around">
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
    </div>
  </nav>
</template>

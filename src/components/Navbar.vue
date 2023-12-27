<script setup>
import { ref } from 'vue';
import logo from "../assets/images/logo-transparent.png"
import NavbarLink from './NavbarLink.vue';
import portfolio from "../assets/files/portfolio.pdf"

const menuOpen = ref(false)

const links = ref([
  {
    title: "Inicio",
    active: false,
    href: "/"
  },
  // {
  //   title: "Nuestros servicios",
  //   active: false,
  //   href: "#servicios"
  // },
  {
    title: "Contacto",
    active: false,
    href: "#contacto"
  },
  // {
  //   title: "Blog",
  //   active: false,
  //   href: "/blog"
  // },
]);

</script>

<template>
  <nav class="z-10 bg-storm-gray-50 fixed top-0 w-full border-b-4 border-minsk-800 py-0 md:py-2 md:pt-4">
    <div class="mx-auto max-w-7xl px-2 md:px-0">
      <div class="relative flex flex-1 h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center justify-between md:hidden">
          <!-- Mobile menu button-->
          <button type="button" @click="menuOpen = !menuOpen"
            class="relative inline-flex items-center justify-center rounded-sm p-2 text-minsk-800 hover:bg-minsk-800  hover:text-white "
            aria-controls="mobile-menu" aria-expanded="false">
            <span class="absolute -inset-0.5"></span>
            <span class="sr-only">Open main menu</span>
            <!--
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
          -->
            <svg class="block h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
              aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <!--
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          -->
            <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
              aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="w-full flex justify-center md:hidden">
          <a href="/" class="flex flex-shrink-0 items-center cursor-pointer">
            <img class="h-12 w-auto" :src="logo" alt="MJF - Soluciones Eléctricas">
          </a>
        </div>
        <div class=" flex-1 hidden md:flex items-center sm:items-stretch justify-between md:px-8">
          <a href="/" class="flex flex-shrink-0 items-center cursor-pointer">
            <img class="h-12 w-auto" :src="logo" alt="MJF - Soluciones Eléctricas">
            <p class="uppercase font-bold text-minsk-900 hidden md:block">Soluciones Eléctricas</p>
          </a>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-2">
              <NavbarLink v-for="link in links" :link="link">
                {{ link.title }}
              </NavbarLink>
              <a :href="portfolio" target="_blank" class=" block rounded-sm px-4 py-2 text-base shadow-md" :class="{
                'bg-minsk-900 text-white font-medium': active,
                'bg-white text-storm-gray-900 hover:bg-minsk-900 hover:text-white': !active
              }" aria-current="page">
                Portafolio
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="md:hidden bg-storm-gray-200" id="mobile-menu" v-show="menuOpen">
      <div class="space-y-1 px-2 pb-3 pt-2 ">
        <NavbarLink v-for="link in links" :link="link">
          {{ link.title }}
        </NavbarLink>
      </div>
    </div>
  </nav>
</template>
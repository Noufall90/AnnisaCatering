<template>
  <header class="fixed top-1 left-0 w-full z-50 bg-transparent">
    <div class="max-w-screen-xl mx-auto">
      <div class="flex items-center justify-between h-16">
        <div class="bg-[#D0B8A8] rounded-xl shadow-md shadow-gray-900 flex items-center w-full">
          <!-- Logo -->
          <a href="#" class="flex items-center ml-4">
            <img
              src="/src/assets/Logo_AnnisaCat.png"
              alt="Annisa Catering Logo"
              class="h-10 w-auto"/>
          </a>

          <!-- Desktop Navigation -->
          <nav class="hidden md:flex flex-grow justify-center">
            <ul class="flex space-x-4 px-2 py-1 list-none">
              <li v-for="item in navItems" :key="item.name">
                <!-- Check if the item is a router link or requires scroll -->
                <template v-if="item.isRouterLink">
                  <RouterLink
                    :to="item.route"
                    class="px-4 py-2 text-[#370B01] font-semibold rounded-full bg-[#D0B8A8] shadow-lg hover:bg-[#ffeaab] hover:text-[#3d2610] transition-colors duration-300">
                    {{ item.name }}
                  </RouterLink>
                </template>
                <template v-else>
                  <a
                    href="#"
                    @click="scrollTo(item.scrollTarget)"
                    class="px-4 py-2 text-[#370B01] font-semibold rounded-full bg-[#D0B8A8] shadow-lg hover:bg-[#ffeaab] hover:text-[#3d2610] transition-colors duration-300">
                    {{ item.name }}
                  </a>
                </template>
              </li>
            </ul>
          </nav>

          <!-- Mobile menu button -->
          <button
            @click="toggleMobileMenu"
            class="md:hidden ml-auto my-1 mr-4 rounded-xl outline-2 p-4 inline-flex items-center justify-center text-[#370B01] bg-[#dfc6b5] shadow-xl hover:text-[#3d2610] hover:bg-[#ffeaab] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#3d2610]"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state -->
    <div v-if="isMobileMenuOpen" class="md:hidden bg-[#D0B8A8] rounded-lg">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <template v-for="item in navItems" :key="item.name">
          <template v-if="item.isRouterLink">
            <RouterLink
              :to="item.route"
              class="block px-3 py-2 rounded-md text-base font-medium text-[#370B01] hover:bg-[#ffeaab] hover:text-[#3d2610]"
              @click="isMobileMenuOpen = false"
            >
              {{ item.name }}
            </RouterLink>
          </template>
          <template v-else>
            <a
              href="#"
              @click="scrollTo(item.scrollTarget)"
              class="block px-3 py-2 rounded-md text-base font-medium text-[#370B01] hover:bg-[#ffeaab] hover:text-[#3d2610]"
            >
              {{ item.name }}
            </a>
          </template>
        </template>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import VueScrollTo from 'vue-scrollto'

const isMobileMenuOpen = ref(false)

const navItems = [
  { name: 'Beranda', route: '/', scrollTarget: '#hero', isRouterLink: true },
  { name: 'Tentang Kami',route: '/', scrollTarget: '#about', isRouterLink: false },
  { name: 'Layanan',route: '/',  scrollTarget: '#testimonial', isRouterLink: false },
  { name: 'Galeri', route: '/gallery', scrollTarget: '/gallery', isRouterLink: true },
  { name: 'Kontak', scrollTarget: '#footer', isRouterLink: false }
]

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

function scrollTo(target) {
  VueScrollTo.scrollTo(target, 500, {
    easing: 'ease-in-out',
    offset: -100,
    force: false,
    cancelable: true,
    onStart: () => {},
    onDone: () => {
      isMobileMenuOpen.value = false
    },
    onCancel: () => {},
    x: false,
    y: true
  })
}
</script>

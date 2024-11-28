<template>
  <header class="fixed top-0 left-0 w-full z-50 bg-transparent">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="bg-[#D0B8A8] rounded-full shadow-md shadow-gray-900 flex items-center w-full">
          <!-- Logo -->
          <a href="#" class="flex items-center ml-4">
            <img
              src="/src/assets/Logo_AnnisaCat.png"
              alt="Annisa Catering Logo"
              class="h-10 w-auto"
            />
          </a>

          <!-- Desktop Navigation -->
          <nav class="hidden md:flex flex-grow justify-center">
            <ul class="flex space-x-1 px-2 py-1">
              <li v-for="item in navItems" :key="item">
                <a
                  href="#"
                  @click="navigate(item.toLowerCase())"
                  class="px-4 py-2 text-[#370B01] font-semibold rounded-full hover:bg-[#ffeaab] hover:text-[#3d2610] transition-colors duration-300"
                >
                  {{ item }}
                </a>
              </li>
            </ul>
          </nav>

          <!-- Mobile menu button -->
          <button
            @click="toggleMobileMenu"
            class="md:hidden ml-auto mr-4 rounded-md p-2 inline-flex items-center justify-center text-[#370B01] hover:text-[#3d2610] hover:bg-[#ffeaab] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#3d2610]"
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
    <div v-if="isMobileMenuOpen" class="md:hidden bg-[#D0B8A8]">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a
          v-for="item in navItems"
          :key="item"
          href="#"
          @click="navigate(item.toLowerCase())"
          class="block px-3 py-2 rounded-md text-base font-medium text-[#370B01] hover:bg-[#ffeaab] hover:text-[#3d2610]"
        >
          {{ item }}
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['navigate'])

const navItems = ['Beranda', 'Tentang Kami', 'Layanan', 'Galeri', 'Kontak']
const isMobileMenuOpen = ref(false)

function navigate(component) {
  emit('navigate', component)
  isMobileMenuOpen.value = false
}

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

/* Add any additional styles here if needed */
</style>
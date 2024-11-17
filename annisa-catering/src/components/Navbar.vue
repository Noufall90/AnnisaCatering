<template>
  <header>
    <div
      class="fixed flex max-w-screen-xl items-center justify-between px-0 py-0 z-50 md:mx-auto w-full">
      <!-- Logo di kiri -->
      <a href="#" class="flex items-center whitespace-nowrap text-2xl font-black ml-4">
        <img
          src="/src/assets/Logo_AnnisaCat.png"
          alt="Annisa Catering Logo"
          class="logo_navbar h-10"
        />
      </a>

      <!-- Navigation Menu di tengah -->
      <nav aria-label="Header Navigation" class="flex-grow flex justify-center">
        <div
          class="flex h-full items-center rounded-full bg-[#D0B8A8] px-0 py-0 shadow-md shadow-gray-900">
          <ul class="flex px-6 py-0 h-10 space-x-6">
            <li
              class="px-6 py-2 text-[#370B01] font-semibold rounded-full hover:bg-[#ffeaab] hover:text-[#3d2610] transition-colors duration-300 shadow-md list-none">
              Beranda
            </li>
            <li
              class="px-6 py-2 text-[#370B01] font-semibold rounded-full hover:bg-[#ffeaab] hover:text-[#3d2610] transition-colors duration-300 shadow-md list-none">
              Kontak
            </li>
            <li
              class="px-6 py-2 text-[#370B01] font-semibold rounded-full hover:bg-[#ffeaab] hover:text-[#3d2610] transition-colors duration-300 shadow-md list-none">
              Layanan
            </li>
            <li
              class="px-6 py-2 text-[#370B01] font-semibold rounded-full hover:bg-[#ffeaab] hover:text-[#3d2610] transition-colors duration-300 shadow-md list-none">
              Galeri
            </li>
            <li
              class="px-6 py-2 text-[#370B01] font-semibold rounded-full hover:bg-[#ffeaab] hover:text-[#3d2610] transition-colors duration-300 shadow-md list-none">
              Kontak
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { defineEmits } from "vue";

const emit = defineEmits(["navigate"]);

function navigate(component) {
  emit("navigate", component);
}
</script>

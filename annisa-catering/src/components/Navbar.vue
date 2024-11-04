<template>
  <nav class="fixed top-0 z-50 w-full">
    <div
      class="mx-auto flex h-[40px] w-[40px] items-left justify-center px-4">
      <img
        src="/src/assets/Logo_AnnisaCat.png"
        alt="Annisa Catering Logo"
        class="logo_navbar"
      />

      <!-- Navigation Menu -->
      <div
        class="flex h-full items-center rounded-full bg-[#D0B8A8] px-8 py-2 shadow-lg shadow-gray-300"
      >
        <div class="flex gap-[50px] text-[18px] text-[#370B01] font-semibold">
          <!-- Active link with underline -->
          <button
            class="px-6 py-2 bg-[#D0B8A8] text-[#370B01] font-semibold rounded-full hover:bg-[#ffeaab] hover:text-[#3d2610] transition-colors duration-300 shadow-md"
          >
            Beranda
            <span
              class="absolute bottom-0 left-0 h-[2px] w-full bg-[#370B01]"
            ></span>
          </button>

          <!-- Other links without underline -->
          <button
            class="px-6 py-2 bg-[#D0B8A8] text-[#370B01] font-semibold rounded-full hover:bg-[#ffeaab] hover:text-[#3d2610] transition-colors duration-300 shadow-md"
          >
            Kontak
          </button>

          <button
            class="px-6 py-2 bg-[#D0B8A8] text-[#370B01] font-semibold rounded-full hover:bg-[#ffeaab] hover:text-[#3d2610] transition-colors duration-300 shadow-md"
          >
            Layanan
          </button>

          <button
            class="px-6 py-2 bg-[#D0B8A8] text-[#370B01] font-semibold rounded-full hover:bg-[#ffeaab] hover:text-[#3d2610] transition-colors duration-300 shadow-md"
          >
            Galeri
          </button>

          <button
            class="px-6 py-2 bg-[#D0B8A8] text-[#370B01] font-semibold rounded-full hover:bg-[#ffeaab] hover:text-[#3d2610] transition-colors duration-300 shadow-md"
          >
            Kontak
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { defineEmits } from "vue";

const emit = defineEmits(["navigate"]);

function navigate(component) {
  emit("navigate", component);
}
</script>

<style>
nav button {
  color: #613c1a;
  padding: 8px;
  border-radius: 4px;
}

nav button:hover {
  background-color: #f2e3d5;
  transition: background-color 0.3s ease-in-out;
}

.logo_navbar {
  height: 40px;
  width: auto;
}
</style>

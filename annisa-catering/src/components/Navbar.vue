<template>
  <nav class="fixed top-0 z-50 w-full">
    <div class="mx-auto flex h-[67px] max-w-[1490px] items-center justify-between px-4">
      <div class="flex items-center">
        <img
            src="/src/assets/Logo_AnnisaCat.png"
            alt="Annisa Catering Logo"
            class="h-10 w-auto mr-4"
          />
        <div class="flex h-full items-center rounded-full bg-[#D0B8A8] px-8 py-2 shadow-lg shadow-gray-300">
          <div class="flex gap-[50px] text-[18px] text-[#370B01] font-semibold">
            <button @click="navigate('HeroSection')">Beranda</button>
            <button @click="navigate('AboutSection')">Tentang</button>
            <button @click="navigate('ServicesSection')">Layanan</button>
            <button @click="navigate('GalleryPage')">Galeri</button>
            <button @click="navigate('TestimonialsSection')">Testimoni</button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { defineEmits } from 'vue'

const emit = defineEmits(['navigate'])

function navigate(component) {
  emit('navigate', component)
}
</script>

<style>
nav button {
  color: #613c1a;
}

nav button:hover {
  background-color: #f2e3d5;
  transition: background-color 0.3s ease-in-out;
}

nav img {
  height: 40px;
  width: auto;
}
</style>

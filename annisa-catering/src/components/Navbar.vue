<template>
  <header>
    <div
      class="fixed flex max-w-screen-xl items-center justify-between px-0 py-5 z-50 md:mx-auto w-full"
    >
      <!-- Logo di kiri -->
      <a
        href="#"
        class="flex items-center whitespace-nowrap text-2xl font-black ml-4"
      >
        <img
          src="/src/assets/Logo_AnnisaCat.png"
          alt="Annisa Catering Logo"
          class="logo_navbar h-10"
        />
      </a>

      <!-- Navigation Menu di tengah -->
      <nav aria-label="Header Navigation" class="flex-grow flex justify-center">
        <div
          class="flex h-16 items-center rounded-full bg-[#d1b8a7] px-0 py-0 shadow-md shadow-gray-900"
        >
          <ul class="flex px-6 py-0 h-10 space-x-6">
            <RouterLink to="/">
              <button
              @click="scrollToHero"
                class="px-6 py-2 bg-[#d0b5a4] text-[#370B01] font-semibold rounded-full hover:bg-[#ffeaab] hover:text-[#3d2610] transition-colors duration-300 shadow-md list-none">
                Beranda
              </button>
            </RouterLink>

            <button
            @click="scrollToAbout"
              class="px-6 py-2 bg-[#d0b5a4] text-[#370B01] font-semibold rounded-full hover:bg-[#ffeaab] hover:text-[#3d2610] transition-colors duration-300 shadow-md list-none">
              Tentang Kami
            </button>
            <button
            @click="scrollToTestimonial"
              class="px-6 py-2 bg-[#d0b5a4] text-[#370B01] font-semibold rounded-full hover:bg-[#ffeaab] hover:text-[#3d2610] transition-colors duration-300 shadow-md list-none">
              Layanan
            </button>
            <RouterLink to="/gallery">
              <button
                class="px-6 py-2 bg-[#d0b5a4] text-[#370B01] font-semibold rounded-full hover:bg-[#ffeaab] hover:text-[#3d2610] transition-colors duration-300 shadow-md list-none"
              >
                Galeri
              </button>
            </RouterLink>

            <button
              @click="scrollToFooter"
              class="px-6 py-2 bg-[#d0b5a4] text-[#370B01] font-semibold rounded-full hover:bg-[#ffeaab] hover:text-[#3d2610] transition-colors duration-300 shadow-md list-none"
            >
              Kontak
            </button>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { defineEmits } from "vue";
import { RouterLink } from "vue-router";
import VueScrollTo from 'vue-scrollto';

const emit = defineEmits(["navigate"]);

function navigate(component) {
  emit("navigate", component);
}


function scrollToFooter() {
  VueScrollTo.scrollTo('#footer', 500, {
    easing: 'ease-in-out',
    offset: -100,
    force: false,
    cancelable: true,
    onStart: function () {
    },
    onDone: function () {
    },
    onCancel: function () {
    },
    x: false,
    y: true
  });
}

function scrollToTestimonial() {
  VueScrollTo.scrollTo('#testimonial', 500, {
    easing: 'ease-in-out',
    offset: -100,
    force: false,
    cancelable: true,
    onStart: function () {
    },
    onDone: function () {
    },
    onCancel: function () {
    },
    x: false,
    y: true
  });
}

function scrollToAbout() {
  VueScrollTo.scrollTo('#about', 500, {
    easing: 'ease-in-out',
    offset: -100,
    force: false,
    cancelable: true,
    onStart: function () {
    },
    onDone: function () {
    },
    onCancel: function () {
    },
    x: false,
    y: true
  });
}

function scrollToHero() {
  VueScrollTo.scrollTo('#hero', 500, {
    easing: 'ease-in-out',
    offset: -100,
    force: false,
    cancelable: true,
    onStart: function () {
    },
    onDone: function () {
    },
    onCancel: function () {
    },
    x: false,
    y: true
  });
}
</script>

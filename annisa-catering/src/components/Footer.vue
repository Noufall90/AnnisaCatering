<template>
  <footer class="bg-[#d0b8a8] font-poppins">
    <div class="container mx-auto px-4 py-4">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <!-- Logo dan Deskripsi -->
        <div class="flex flex-col items-start">
          <div class="flex items-center">
            <img
              class="h-20 w-20 rounded-full"
              src="https://via.placeholder.com/160x159"
              alt="Logo Annisa Catering"
            />
            <h2 class="ml-4 text-5xl font-poppins leading-tight text-white">
              Annisa Catering
            </h2>
          </div>
          <p class="mt-6 text-2xl font-poppins leading-tight text-[#080807]">
            A Special Taste for Every Occasion
          </p>
          <p class="mt-4 text-base leading-relaxed text-[#080807]">
            Trusted catering service in Balikpapan, providing quality dishes for
            various events, from weddings to office meetings.
          </p>
          <div class="mt-8 flex space-x-4">
            <!-- Social Media Icons -->
            <a
              v-for="(icon, index) in socialIcons"
              :key="index"
              :href="icon.link"
              target="_blank"
              rel="noopener noreferrer"
              class="rounded-full flex items-center justify-center px-1 py-1 h-10 w-10 bg-[#ad343e] transition-all hover:bg-[#8d493a]"
            >
              <component :is="icon.component" class="h-6 w-6 text-white" />
            </a>
          </div>
        </div>

        <!-- Informasi Kontak -->
        <div class="flex flex-col">
          <h3 class="text-3xl font-poppins text-white">Contact Us</h3>
          <a
            href="mailto:annisacatering@gmail.com"
            class="mt-8 text-xl text-[#080808] hover:underline font-poppins"
          >
            annisacatering@gmail.com
          </a>
          <a
            href="https://wa.me/628125361600"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-4 text-xl text-[#080808] hover:underline font-poppins"
          >
            WhatsApp: +62 812 536 1600
          </a>
        </div>

        <!-- Instagram Feed -->
        <div class="flex flex-col">
          <h3 class="text-3xl font-poppins text-white">Check Our Instagram</h3>
          <div class="mt-8 grid grid-cols-2 gap-4">
            <div
              v-for="(image, index) in instagramImages"
              :key="index"
              class="overflow-hidden rounded-xl"
            >
              <img
                :src="image"
                :alt="`Instagram post ${index + 1}`"
                class="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-[#8d493a] py-1">
      <p class="text-center text-sm text-white ">
        © {{ new Date().getFullYear() }} Annisa Catering. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";
import { Instagram, Phone } from "lucide-vue-next";

const socialIcons = ref([
  { component: Instagram, link: "https://instagram.com/annisacateringbpn" },
  { component: Phone, link: "tel:+628125361600" },
]);

const instagramImages = ref([
  "https://via.placeholder.com/194x170",
  "https://via.placeholder.com/194x170",
  "https://via.placeholder.com/194x170",
  "https://via.placeholder.com/194x170",
]);
</script>

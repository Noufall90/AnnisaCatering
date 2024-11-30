<template>
  <footer id="footer" class="bg-[#d0b8a8] font-poppins">
    <div class="container mx-auto py-4">
      <div class="grid grid-cols-1 justify-center gap-2 md:grid-cols-2 lg:grid-cols-3">
        <!-- Logo dan Deskripsi -->
        <div class="px-6">
          <div class="flex items-center">
            <img
              class="h-20 w-20 rounded-full"
              src="/src/assets/LOGO 4.jpg"
              alt="Logo Annisa Catering"
            />
            <h2 class="ml-4 text-[30px] text-left font-poppins leading-tight text-white ">
              Annisa Catering
            </h2>
          </div>
          <p class="mt-4 text-2xl font-poppins text-left leading-tight text-[#080807]">
            Selera Spesial untuk Setiap Acara
          </p>
          <p
            class="mt-4 text-base leading-relaxed text-[#080807] text-left font-poppins">
            Jasa catering terpercaya di Balikpapan, menyediakan hidangan berkualitas untuk berbagai acara, mulai dari pernikahan hingga rapat kantor.
          </p>
        </div>

        <!-- Informasi Kontak -->
        <div class="flex flex-col">
          <h3 class="text-[24px] font-poppins text-white">Hubungi kami</h3>
          <a
            href="mailto:annisacatering@gmail.com"
            class="mt-8 text-xl text-[#080808] hover:underline font-poppins mb-10">
            annisacatering@gmail.com
          </a>
          <a
            href="https://wa.me/628125361600"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-4 text-xl text-[#080808] hover:underline font-poppins">
            WhatsApp: +62 812 536 1600
          </a>
        </div>

        <!-- Instagram Feed -->
        <div class="flex flex-col justify-start">
          <h3 class="text-[24px] font-poppins text-white">Lihat Instagram kita</h3>
          <div class="px-10 grid grid-cols-2 gap-4">
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
        <div class="flex space-x-4 justify-center">
            <!-- Social Media Icons -->
            <a
              v-for="(icon, index) in socialIcons"
              :key="index"
              :href="icon.link"
              target="_blank"
              rel="noopener noreferrer"
              class="rounded-full flex items-center justify-center px-1 py-1 h-14 w-14 bg-[#ad343e] transition-all hover:bg-[#8d493a]">
              <component :is="icon.component" class="h-7 w-7 text-white" />
            </a>
          </div>
      </div>
    </div>
    <div class="bg-[#391912] py-1">
      <p class="text-center text-sm text-white">
        © {{ new Date().getFullYear() }} Annisa Catering. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";
import { Instagram, MessageCircleMore  } from "lucide-vue-next";

const socialIcons = ref([
  { component: Instagram, link: "https://instagram.com/annisacateringbpn" },
  { component: MessageCircleMore, link: "tel:+628125361600" },
]);

const instagramImages = ref([
  "../../src/assets/imagenasikuning.png",
  "../../src/assets/imagesambelgoreng.png",
  "../../src/assets/imagenasiliwet.png",
  "../../src/assets/imagesateayam.png",
]);
</script>

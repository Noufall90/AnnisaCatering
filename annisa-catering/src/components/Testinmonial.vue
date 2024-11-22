<template>
  <section class="relative">
    <div class="max-auto mb-8">
      <h2 class="text-[50px] font-bold text-[#75200D] text-center">
        Apa kata Customer kami
      </h2>
    </div>
    <div class="flex flex-col md:flex-row items-center justify-center md:justify-between gap-1 px-0">
      <!-- Bagian Kiri: Foto -->
      <div class="flex-1 flex justify-center z-10 mb-10">
        <img
          src="/src/assets/costumer.png"
          alt="Image testimoni"
          class="rounded-xl max-w-sm shadow-xl"
        />
      </div>
      <div class="flex-1 relative overflow-hidden rounded-3xl bg-white shadow-lg mb-10">
        <!-- Carousel Text -->
        <p class="text-[18px] text-[#370B01] text-left pl-10 pr-10">
          <span class="underline decoration-wavy font-bold font-poppins">
            {{ customerFeedback[currentIndex].name }}
          </span>
          {{ customerFeedback[currentIndex].testimonial }}
        </p>
        
      </div>
      <div class="left-5 right-5 flex -translate-y-1/2 transform justify-between">
          <a @click="nextSlide" class="btn btn-circle bg-[#f5e5d8] text-[#75200D] text-[25px] rounded-full shadow-2xl px-2 py-2 mr-10">
            ❯
          </a>
        </div>
    </div>

    <div>
      <img
        src="/src/assets/3Graphic Design_1.png"
        alt="Design atas"
        class="absolute top-0 right-0 h-30 w-40"
      />
      <img
        src="/src/assets/3Graphic Design_2.png"
        alt="Design bawah"
        class="absolute bottom-0 left-0 mt-10 h-30 w-40"
      />

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const customerFeedback = [
  {
    name: "Kimi",
    testimonial:
      "kimi no",
  },
  {
    name: "no",
    testimonial:
      "namaewa",
  },
  {
    name: "nawa",
    testimonial:
      "udin",
  },
];

// State untuk indeks testimonial yang sedang aktif
const currentIndex = ref(0);

// Fungsi untuk mengubah ke testimonial berikutnya
const nextSlide = () => {
  currentIndex.value = currentIndex.value < customerFeedback.length - 1 ? currentIndex.value + 1 : 0;
};
</script>
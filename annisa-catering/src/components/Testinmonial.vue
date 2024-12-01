<template>
  <section class="relative">

    <div class="relative max-auto z-10">
      <h2 class="text-[50px] mt-0 pt-10 font-bold text-[#75200D] text-center">
        Apa kata Customer kami
      </h2>
    </div>
    <div
      class="pb-4 flex flex-col md:flex-row items-center justify-center gap-2 px-4">
      <!-- Decorative Graphics -->
        <img
          src="/src/assets/3Graphic Design_1.png"
          alt="Design atas"
          class="absolute top-0 right-0 h-36 w-32 sm:h-32 sm:w-40 "
        />
        <img
          src="/src/assets/3Graphic Design_2.png"
          alt="Design bawah"
          class="absolute bottom-0 left-0 h-36 w-32 sm:h-36 sm:w-40 "
        />
      <!-- Bagian Kiri: Foto -->
      <div class="flex-1 flex justify-center z-10 pb-8 md:mb-0">
        <img
          src="/src/assets/costumer.png"
          alt="Image testimoni"
          class="rounded-xl max-w-xs md:max-w-sm shadow-xl"
        />
      </div>

      <!-- Carousel Text -->
      <div
        class="flex-1 relative overflow-hidden rounded-3xl bg-white shadow-lg p-6 mb-10 md:p-10"
      >
        <p
          class="text-[16px] md:text-[18px] text-[#370B01] text-left font-poppins"
        >
          <span class="underline decoration-wavy font-bold">
            {{ customerFeedback[currentIndex].name }}
          </span>
          : {{ customerFeedback[currentIndex].testimonial }}
        </p>
      </div>
      <div
        class="animate-bounce left-5 right-5 flex -translate-y-1/2 transform"
      >
        <a
          @click="nextSlide"
          class="btn btn-circle bg-[#f5e5d8] text-[#75200D] text-[25px] rounded-full shadow-2xl px-2 py-2"
        >
          ❯
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const customerFeedback = [
  {
    name: "Siti Rahmawati",
    testimonial:
      "Makanannya enak banget, pelayanannya cepat dan ramah! Semua tamu puas, terima kasih Annisa Catering!",
  },
  {
    name: "Budi Prasetyo",
    testimonial:
      "Layanan super profesional, makanan berkualitas, dan selalu tepat waktu. Sangat recommended!",
  },
  {
    name: "Rina",
    testimonial:
      "Acara jadi lancar berkat Annisa Catering. Makanan lezat dan timnya sangat membantu!",
  },
];

const currentIndex = ref(0);

const nextSlide = () => {
  currentIndex.value =
    currentIndex.value < customerFeedback.length - 1
      ? currentIndex.value + 1
      : 0;
};

const prevSlide = () => {
  currentIndex.value =
    currentIndex.value > 0
      ? currentIndex.value - 1
      : customerFeedback.length - 1;
};
</script>

<style scoped>
@media (max-width: 768px) {
  h2 {
    font-size: 32px;
  }

  p {
    font-size: 18px;
  }
}
</style>

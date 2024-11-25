<template>
  <section id="testimonial" class="relative">
    <div class="max-auto">
      <h2 class="text-[50px] mt-0 pt-10 font-bold text-[#75200D] text-center">
        Apa kata Customer kami
      </h2>
    </div>
      <div class="pb-6 flex flex-col md:flex-row items-center justify-center gap-2 px-4">
        <!-- Bagian Kiri: Foto -->
        <div class="flex-1 flex justify-center z-10 pb-8 md:mb-0">
          <img
            src="/src/assets/costumer.png"
            alt="Image testimoni"
            class="rounded-xl max-w-xs md:max-w-sm shadow-xl"
          />
        </div>

        <!-- Carousel Text -->
        <div class="flex-1 relative overflow-hidden  rounded-3xl bg-white shadow-lg p-6 mb-10 md:p-10">
          <p class="text-[16px] md:text-[18px] text-[#370B01] text-left font-poppins">
            <span class="underline decoration-wavy font-bold">
              {{ customerFeedback[currentIndex].name }}
            </span>
            : {{ customerFeedback[currentIndex].testimonial }}
          </p>
        </div>
        <div class="animate-bounce left-5 right-5 flex -translate-y-1/2 transform">
        <a @click="nextSlide" class="btn btn-circle bg-[#f5e5d8] text-[#75200D] text-[25px] rounded-full shadow-2xl px-2 py-2 mr-10">
          ❯
        </a>
      </div>
    </div>

    <!-- Navigation Buttons -->


    <!-- Decorative Graphics -->
    <div>
      <img
        src="/src/assets/3Graphic Design_1.png"
        alt="Design atas"
        class="absolute top-0 right-0 h-30 w-40 sm:h-30 sm:w-40 lg:h-30 lg:w-40"
      />
      <img
        src="/src/assets/3Graphic Design_2.png"
        alt="Design bawah"
        class="absolute bottom-0 left-0 h-30 w-40 sm:h-30 sm:w-40 lg:h-30 lg:w-40"
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
      "Kimi memberikan pelayanan yang sangat memuaskan dan berkualitas!",
  },
  {
    name: "No",
    testimonial: "Produk ini luar biasa dan harganya sangat terjangkau.",
  },
  {
    name: "Nawa",
    testimonial: "Saya pasti akan merekomendasikan ini kepada teman-teman saya!",
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

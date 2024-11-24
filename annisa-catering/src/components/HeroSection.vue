<template>
  <div id="hero" class="carousel w-full h-screen relative">
    <div
      v-for="(slide, index) in slides"
      :key="index"
      :id="'slide' + (index + 1)"
      class="carousel-item absolute w-full h-full transition-opacity duration-700"
      :class="{ 'opacity-100 z-10': currentSlide === index, 'opacity-0 z-0': currentSlide !== index }"
    >
      <img
        :src="slide.image"
        class="w-full h-full object-cover sm:h-[80vh] md:h-[90vh] lg:h-full"
        alt="Slide image"
      />
      <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a @click="prevSlide" class="btn btn-circle">❮</a>
        <a @click="nextSlide" class="btn btn-circle">❯</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const slides = ref([
  { image: "/src/assets/sambel_goreng_background.jpg" },
  { image: "/src/assets/sate_background.jpg" },
  { image: "/src/assets/DSC06426.jpg" },
  { image: "/src/assets/DSC06429.jpg" },
]);

const currentSlide = ref(0);

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length;
}

function prevSlide() {
  currentSlide.value =
    (currentSlide.value - 1 + slides.value.length) % slides.value.length;
}

let interval;
onMounted(() => {
  interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>
<template>
  <section class="relative">
    <div class="">
      <h2 class="text-[70px] mt-0 mb-0 font-bold text-[#75200D] text-center">
        Galeri
      </h2>
      <div class="mt-16 grid grid-cols-3 gap-8">
        <div
          v-for="(item, index) in galleryItems"
          :key="index"
          class="relative overflow-hidden rounded-xl"
        >
          <img
            :src="item.image"
            :alt="item.title"
            class="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const galleryItems = [
  { title: "Menu 1", image: "/src/assets/image1.jpg" },
  { title: "Menu 2", image: "/src/assets/image2.jpg" },
  { title: "Menu 3", image: "/src/assets/image3.jpg" },
];
</script>

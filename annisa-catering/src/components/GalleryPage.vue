<template>
  <section class="gallery-section">
    <img
        src="/src/assets/Graphic Design_1.png"
        alt="Design atas"
        class="absolute top-0 right-0 h-30 w-40 sm:h-30 sm:w-40 lg:h-30 lg:w-40"
      />
    <div class="container mx-15">
      <div class="text-center mb-15">
        <h2 class="text-[50px] mt-20 mb-5 font-bold text-[#75200D]">
          Galeri
        </h2>
      </div>

      <div class="masonry-layout justify-center">
        <div
          v-for="(item, index) in galleryItems"
          :key="index"
          class="masonry-item relative overflow-hidden rounded-xl shadow-lg">
          <img
            :src="item.image"
            :alt="item.title"
            class="h-full w-full object-cover transition-transform duration-300 hover:scale-20"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const galleryItems = [
  { title: "foto 1", image: "src/assets/klepon edited.jpg" },
  { title: "foto 2", image: "src/assets/nasi kuning edited 3.jpg" },
  { title: "foto 3", image: "src/assets/nasi kuning edited 3.jpg" },
  { title: "foto 4", image: "src/assets/klepon edited.jpg" },
  { title: "foto 5", image: "src/assets/nasi kuning edited 3.jpg" },
  { title: "foto 6", image: "src/assets/klepon edited.jpg" },
];
</script>

<style scoped>
.gallery-section {
  padding: 2rem 0;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
}

.masonry-layout {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.masonry-item {
  flex: 1 1 calc(33.333% - 1rem);
  max-width: calc(33.333% - 1rem);
}

@media (max-width: 1024px) {
  .masonry-item {
    flex: 1 1 calc(50% - 20px); 
    max-width: calc(50% - 20px);
  }
}

@media (max-width: 400px) {
  .masonry-item {
    flex: 1 1 100%; 
    max-width: 100%;
  }
}
</style>
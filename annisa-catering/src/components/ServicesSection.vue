<template>
  <section id="testimonial" >
    <div class="relative">
      <img
        src="/src/assets/2Graphic Design_1.png"
        alt="Design atas"
        class="absolute top-0 right-0 h-30 w-28 sm:h-30 sm:w-28 lg:h-30 lg:w-28"
      />
      <div class="max-w-7xl mx-auto z-10 px-10 pb-8 text-center">
        <h2
          class="text-[40px] sm:text-[50px] font-poppins font-bold text-[#75200D] mt-0 mb-0"
        >
          Paket
        </h2>
        <h2
          class="text-[40px] sm:text-[50px] font-poppins font-bold text-[#75200D] mt-0 mb-0"
        >
          Layanan Kami
        </h2>
        <div class="mt-10 flex justify-center">
          <div class="grid grid-cols-1 gap-8 max-w-xl">
            <!-- Display single grid item based on current index -->
            <div
              v-for="(pkg, index) in [packages[currentIndex]]"
              :key="index"
              class="relative overflow-hidden rounded-3xl bg-white shadow-lg mb-5"
            >
              <img
                :src="pkg.image"
                :alt="pkg.title"
                class="h-[250px] sm:h-[350px] w-full object-cover"
              />
              <div>
                <h3
                  class="text-[36px] sm:text-[52px] pl-5 mt-0 mb-0 text-left font-medium text-[#75200D]"
                >
                  {{ pkg.title }}
                </h3>
                <p
                  class="pl-5 mt-0 text-lg sm:text-xl text-left font-medium text-[#75200D]"
                >
                  {{ pkg.price }}
                </p>
                <button
                  @click="showDetails = !showDetails"
                  class="justify-center py-2 px-4 mt-4 mb-8 bg-[#75200D] text-white font-poppins rounded-xl"
                >
                  Lihat Detail
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Card Deskripsi Detail -->
        <div
          v-if="showDetails"
          class="mt-0 p-6 bg-white rounded-xl shadow-xl max-w-xl mx-auto">
          <h3
            class="text-[30px] sm:text-[40px] font-poppins font-bold text-[#75200D] mb-4 mt-0"
          >
            Deskripsi Detail: {{ packages[currentIndex].title }}
          </h3>
          <p class="text-base sm:text-lg text-[#75200D]">
            {{ packages[currentIndex].description }}
          </p>
        </div>

        <div
          class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
        >
          <a
            @click="prevSlide"
            class="btn btn-circle bg-[#75200D] text-white rounded-full px-2 py-2"
          >
            ❮
          </a>
          <a
            @click="nextSlide"
            class="btn btn-circle bg-[#75200D] text-white rounded-full px-2 py-2"
          >
            ❯
          </a>
        </div>
      </div>
      <img
        src="/src/assets/2Graphic Design_2.png"
        alt="Design bawah"
        class="absolute bottom-0 left-0 h-30 w-40 sm:h-30 sm:w-40 lg:h-30 lg:w-40"
      />
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

// Data paket dengan deskripsi
const packages = [
  {
    title: "Sekolah",
    image: "/src/assets/imagesateayam copy.png",
    price: "Mulai dari 15.000 / Porsi",
    description:
      "Deskripsi lengkap tentang Paket Sekolah. Paket ini cocok untuk kegiatan sekolah dengan pilihan menu variatif.",
  },
  {
    title: "Prasmanan",
    image: "/src/assets/imagesambelgoreng.png",
    price: "Mulai dari 15.000 / Porsi",
    description:
      "Paket prasmanan untuk acara dengan berbagai pilihan makanan, cocok untuk acara pernikahan, rapat, dll.",
  },
  {
    title: "Kantor",
    image: "/src/assets/imagenasiliwet.png",
    price: "Mulai dari 15.000 / Porsi",
    description:
      "Paket untuk makan siang di kantor dengan menu praktis dan bergizi, pas untuk kegiatan kantor.",
  },
];

const currentIndex = ref(0);
const showDetails = ref(false); // Variabel untuk menampilkan atau menyembunyikan detail

const prevSlide = () => {
  currentIndex.value =
    currentIndex.value > 0 ? currentIndex.value - 1 : packages.length - 1;
  showDetails.value = false; // Menyembunyikan detail saat berganti slide
};

const nextSlide = () => {
  currentIndex.value =
    currentIndex.value < packages.length - 1 ? currentIndex.value + 1 : 0;
  showDetails.value = false; // Menyembunyikan detail saat berganti slide
};
</script>

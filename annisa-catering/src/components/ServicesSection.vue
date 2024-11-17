<template>
  <section class="relative">
    <div class="max-w-7xl px-4 text-center">
      <img
        src="/src/assets/2Graphic Design_1.png"
        alt="Design atas"
        class="absolute top-0 right-0 h-30 w-28 justify-center"
      />
      <img
        src="/src/assets/2Graphic Design_2.png"
        alt="Design bawah"
        class="absolute bottom-0 left-0 h-30 w-40 justify-center mt-10"
      />
      <h2 class="text-[50px] font-poppins font-bold text-[#75200D] mt-0 mb-0">Paket</h2>
      <h2 class="text-[50px] font-poppins font-bold text-[#75200D] mt-0 mb-0">Layanan Kami</h2>
      <div class="mt-10 flex justify-center">
        <div class="grid grid-cols-3 gap-8 max-h-30 max-w-6xl">
          <div
            v-for="(pkg, index) in packages"
            :key="index"
            class="relative overflow-hidden rounded-3xl bg-white shadow-lg mb-10"
          >
            <img
              :src="pkg.image"
              :alt="pkg.title"
              class="h-[350px] w-full object-cover"
            />
            <div>
              <h3 class="text-[52px] pl-5 mt-0 mb-0 text-left font-medium text-[#75200D]">
                {{ pkg.title }}
              </h3>
              <p class="pl-5 mt-0 text-xl text-left font-medium text-[#75200D]">
                {{ pkg.price }}
              </p>
              <button class="justify-center py-2 mt-4 mb-8 bg-[#75200D] text-white font-poppins rounded-xl">
                Lihat Detail
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const packages = [
  {
    title: "Sekolah",
    image: "/src/assets/imagesateayam copy.png",
    price: "Mulai dari 15.000 / Porsi",
  },
  {
    title: "Prasmanan",
    image: "src/assets/imagesambelgoreng.png",
    price: "Mulai dari 15.000 / Porsi",
  },
  {
    title: "Kantor",
    image: "src/assets/imagenasiliwet.png",
    price: "Mulai dari 15.000 / Porsi",
  },
];
</script>

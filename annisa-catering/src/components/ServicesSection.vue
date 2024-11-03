<template>
    <section class="relative py-24">
      <div class="mx-auto max-w-7xl px-4 text-center">
        <h2 class="text-[70px] font-bold text-[#75200D]">Paket Layanan Kami</h2>
        <div class="mt-16 grid grid-cols-3 gap-8">
          <div v-for="(pkg, index) in packages" :key="index" class="relative overflow-hidden rounded-xl bg-white shadow-lg">
            <img :src="pkg.image" :alt="pkg.title" class="h-[286px] w-full object-cover" />
            <div class="p-8">
              <h3 class="text-[52px] font-medium">{{ pkg.title }}</h3>
              <p class="mt-4 text-xl font-medium">{{ pkg.price }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const packages = [
    { title: 'Sekolah', image: '/placeholder.svg', price: 'Mulai dari 15.000 / Porsi' },
    { title: 'Prasmanan', image: '/src/assets/imageprasmanan.svg', price: 'Mulai dari 15.000 / Porsi' },
    { title: 'Kantor', image: '/placeholder.svg', price: 'Mulai dari 15.000 / Porsi' }
  ]
  </script>
  
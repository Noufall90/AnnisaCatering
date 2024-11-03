<template>
<div class="relative min-h-screen bg-[#F8EDE3] font-poppins">
  <!-- Navigation -->
  <nav class="fixed top-0 z-50 w-full">
    <div class="mx-auto flex h-[67px] max-w-[1490px] items-center justify-center px-4">
      <!-- Logo (if you want it centered with nav links, adjust this section as needed) -->
      <img 
        src="/src/assets/annisalogo0.svg" 
        alt="Annisa Catering Logo" 
        class="absolute left-4 h-14 w-auto"
      />
      
      <!-- Navigation Menu -->
      <div class="flex h-full items-center rounded-full bg-[#D0B8A8] px-8 py-2 shadow-lg shadow-gray-300">
        <div class="flex gap-[50px] text-[18px] text-[#370B01] font-semibold">
          <!-- Active link with underline -->
          <button class="px-6 py-2 bg-[#D0B8A8] text-[#370B01] font-semibold rounded-full hover:bg-[#75200D] hover:text-[#F8EDE3] transition-colors duration-300 shadow-md">
            Beranda
            <span class="absolute bottom-0 left-0 h-[2px] w-full bg-[#370B01]"></span>
          </button>

          <!-- Other links without underline -->
          <button class="px-6 py-2 bg-[#D0B8A8] text-[#370B01] font-semibold rounded-full hover:bg-[#75200D] hover:text-[#F8EDE3] transition-colors duration-300 shadow-md">Kontak</button>

          <button class="px-6 py-2 bg-[#D0B8A8] text-[#370B01] font-semibold rounded-full hover:bg-[#75200D] hover:text-[#F8EDE3] transition-colors duration-300 shadow-md">Layanan</button>

          <button class="px-6 py-2 bg-[#D0B8A8] text-[#370B01] font-semibold rounded-full hover:bg-[#75200D] hover:text-[#F8EDE3] transition-colors duration-300 shadow-md">Galeri</button>

          <button class="px-6 py-2 bg-[#D0B8A8] text-[#370B01] font-semibold rounded-full hover:bg-[#75200D] hover:text-[#F8EDE3] transition-colors duration-300 shadow-md">Kontak</button>

        </div>
      </div>
    </div>
      </nav>
  
      <!-- Hero Section -->
      <section class="relative h-screen">
        <div class="absolute inset-0">
          <img 
            src="" 
            alt="Hero Background" 
            class="h-full w-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-r from-black via-[#C4C4C4]/40 to-black" />
        </div>
      </section>
  
      <!-- About Section -->
      <section class="relative py-24">
        <div class="mx-auto max-w-7xl px-4">
          <div class="grid grid-cols-2 gap-16">
            <div>
              <p class="text-[30px] font-light text-[#370B01]">Selamat Datang di Website</p>
              <h1 class="mt-5 text-[70px] font-bold capitalize text-[#75200D]">Annisa Catering</h1>
              <p class="mt-8 text-[30px] font-light text-[#370B01]">
                <span class="font-bold">Annisa Catering BPN</span> berdiri dengan komitmen untuk menyediakan berbagai pilihan
                menu berkualitas yang dapat disesuaikan dengan kebutuhan acara Anda, baik dalam jumlah kecil maupun besar.
              </p>
              <ul class="mt-12 space-y-4 text-[30px] font-light text-[#370B01]">
                <li class="flex items-center gap-4">◑ Halal</li>
                <li class="flex items-center gap-4">◑ Harga Terjangkau</li>
                <li class="flex items-center gap-4">◑ Pilihan Menu Lengkap</li>
                <li class="flex items-center gap-4">◑ Pengantaran Tepat Waktu</li>
              </ul>
              <p class="mt-12 text-[30px] font-bold text-[#370B01]">
                Pesan sekarang dan buat acara Anda semakin istimewa dengan Annisa Catering!
              </p>
            </div>
            <div class="relative">
              <img
                src=""
                alt="Featured Dish"
                class="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>
  
      <!-- Services Section -->
      <section class="relative py-24">
        <div class="mx-auto max-w-7xl px-4">
          <div class="text-center">
            <h2 class="text-[70px] font-bold text-[#75200D]">
              Paket
              <br />
              Layanan Kami
            </h2>
          </div>
          <div class="mt-16 grid grid-cols-3 gap-8">
            <div 
              v-for="(pkg, index) in packages" 
              :key="index"
              class="relative overflow-hidden rounded-xl bg-white shadow-lg"
              :class="{'scale-110': index === 1}"
            >
              <div class="relative h-[286px]">
                <img :src="pkg.image" :alt="pkg.title" class="h-full w-full object-cover" />
              </div>
              <div class="p-8">
                <h3 class="text-[52px] font-medium leading-tight text-[#2B2E23]">
                  Paket
                  <br />
                  {{ pkg.title }}
                </h3>
                <p class="mt-4 text-xl font-medium text-[#2B2E23]">{{ pkg.price }}</p>
              </div>
              <div class="absolute inset-0 bg-black/60" />
            </div>
          </div>
          <div class="mt-12 text-center">
            <button class="rounded-2xl bg-[#75200D] px-8 py-3 text-[32px] font-medium text-[#F8EDE3]">
              Lihat Paket
            </button>
          </div>
        </div>
      </section>
  
      <!-- Testimonials -->
      <section class="relative py-24">
        <div class="mx-auto max-w-7xl px-4">
          <div class="grid grid-cols-2 gap-16">
            <div class="relative overflow-hidden rounded-[20px] shadow-2xl">
              <img
                src="/src/assets/imagekatacustomer.svg"
                alt="Testimonial Image"
                class="h-full w-full object-cover"
              />
            </div>
            <div>
              <h2 class="text-[60px] font-bold leading-[78.61px] text-[#75200D]">
                Apa Kata
                <br />
                Customer Kami
              </h2>
              <p class="mt-12 text-4xl font-medium leading-[57.24px] text-[#555555]">
                "Hidangan yang enak dan porsi yang pas. Layanan tepat waktu dan ramah. Annisa Catering memberikan pengalaman
                yang menyenangkan untuk acara keluarga kami. Terima kasih banyak!"
              </p>
              <p class="mt-8 text-4xl font-medium leading-[57.24px] text-[#555555]">— Andi, Balikpapan</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Footer -->
      <footer class="bg-[#D0B8A8]">
        <div class="mx-auto max-w-7xl px-4 py-16">
          <div class="grid grid-cols-3 gap-12">
            <!-- Left Column -->
            <div>
              <div class="flex items-center gap-4">
                <div class="h-[80px] w-[80px] rounded-full bg-[#2B2B2B] p-3">
                  <div class="h-full w-full rounded-full bg-[#FFE15D]" />
                </div>
                <h3 class="font-playfair text-[32px] italic text-white">Annisa Catering</h3>
              </div>
              <h4 class="mt-6 text-2xl font-medium">Rasa Istimewa untuk Setiap Acara</h4>
              <p class="mt-4 text-base">
                Layanan catering terpercaya di Balikpapan, menyediakan hidangan berkualitas untuk berbagai acara, mulai dari
                pernikahan hingga rapat kantor.
              </p>
              <div class="mt-8 flex gap-4">
                <a v-for="social in ['twitter', 'facebook', 'instagram', 'whatsapp']" 
                   :key="social"
                   href="#"
                   class="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#AD343E] transition-colors hover:bg-[#8D493A]"
                >
                  <img :src="`/icons/${social}.svg`" :alt="social" class="h-5 w-5" />
                </a>
              </div>
            </div>
  
            <!-- Middle Column -->
            <div>
              <h3 class="text-[32px] font-bold text-white">Hubungi Kami</h3>
              <div class="mt-8 space-y-4 text-xl">
                <p>annisacatering@gmail.com</p>
                <p>wa.me/628125361600</p>
              </div>
            </div>
  
            <!-- Right Column -->
            <div>
              <h3 class="text-[32px] font-bold text-white">Cek Instagram Kami</h3>
              <div class="mt-8 grid grid-cols-2 gap-4">
                <div v-for="(item, index) in instagramFeed" 
                     :key="index" 
                     class="group relative overflow-hidden rounded-xl"
                >
                  <img 
                    :src="item.image" 
                    :alt="item.title"
                    class="h-[170px] w-[194px] object-cover transition-transform duration-300 group-hover:scale-110" 
                  />
                  <div class="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-3">
                    <span class="text-sm font-medium text-white">{{ item.title }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-[#8D493A] py-4">
          <p class="text-center text-sm text-white">© {{ new Date().getFullYear() }} Annisa Catering. All rights reserved.</p>
        </div>
      </footer>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const packages = [
    {
      title: 'Sekolah',
      image: '/placeholder.svg?height=286&width=338',
      price: 'Mulai dari 15.000 / Porsi'
    },
    {
      title: 'Prasmanan',
      image: '/src/assets/imageprasmanan.svg',
      price: 'Mulai dari 15.000 / Porsi'
    },
    {
      title: 'Kantor',
      image: '/placeholder.svg?height=286&width=338',
      price: 'Mulai dari 15.000 / Porsi'
    }
  ]
  
  const instagramFeed = [
    { title: '', image: '/src/assets/imagenasiliwet.png' },
    { title: '', image: '/src/assets/imagesateayam.png' },
    { title: '', image: '/src/assets/imagesambelgoreng.png' },
    { title: '', image: '/src/assets/imagenasikuning.png' }
  ]
  </script>
  
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=DM+Sans:wght@400;500;700&family=Playfair+Display:wght@600&display=swap');
  </style>
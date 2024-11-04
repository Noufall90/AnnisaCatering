<template>
  <footer class="bg-[#D0B8A8]">
    <div class="mx-auto max-w-7xl px-4 py-16">
      <div class="grid grid-cols-3 gap-12">
        <!-- Left Column -->
        <div>
          <div class="flex items-center gap-4">
            <div class="h-[80px] w-[80px] rounded-full bg-[#2B2B2B] p-3">
              <div class="h-full w-full rounded-full bg-[#FFE15D]" />
            </div>
            <h3 class="font-playfair text-[32px] italic text-white">
              Annisa Catering
            </h3>
          </div>
          <h4 class="mt-6 text-2xl font-medium">
            Rasa Istimewa untuk Setiap Acara
          </h4>
          <p class="mt-4 text-base">
            Layanan catering terpercaya di Balikpapan, menyediakan hidangan
            berkualitas untuk berbagai acara, mulai dari pernikahan hingga rapat
            kantor.
          </p>
          <div class="mt-8 flex gap-4">
            <a
              v-for="social in ['twitter', 'facebook', 'instagram', 'whatsapp']"
              :key="social"
              href="#"
              class="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#AD343E] transition-colors hover:bg-[#8D493A]"
            >
              <img
                :src="`/icons/${social}.svg`"
                :alt="social"
                class="h-5 w-5"
              />
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
            <div
              v-for="(item, index) in instagramFeed"
              :key="index"
              class="group relative overflow-hidden rounded-xl"
            >
              <img
                :src="item.image"
                :alt="item.title"
                class="h-[170px] w-[194px] object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div
                class="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-3"
              >
                <span class="text-sm font-medium text-white">{{
                  item.title
                }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-[#8D493A] py-4">
      <p class="text-center text-sm text-white">
        © {{ new Date().getFullYear() }} Annisa Catering. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style></style>

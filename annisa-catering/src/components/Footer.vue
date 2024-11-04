<template>
    <footer class="bg-[#D0B8A8] py-16">
      <div class="mx-auto max-w-7xl px-4">
        <h3 class="font-playfair text-[32px] italic text-white">Annisa Catering</h3>
        <p class="mt-4 text-base">Layanan catering terpercaya di Balikpapan...</p>
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
  
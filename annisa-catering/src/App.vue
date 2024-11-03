<template>
  <div class="relative min-h-screen bg-[#F8EDE3] font-poppins">
    <NavBar @navigate="navigateTo" />
    <component :is="currentComponent" />
    <Footer />
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <Testimonial />
    <GalleryPage />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import NavBar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import Testimonial from './components/Testinmonial.vue'
import GalleryPage from './components/GalleryPage.vue'
import Footer from './components/Footer.vue'

const currentComponent = ref('HeroSection')

function navigateTo(component) {
  currentComponent.value = component
}
</script>

<style>
/* Add your global styles here if needed */
</style>

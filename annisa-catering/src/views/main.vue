<template>
    <div class="relative min-h-screen bg-[#F8EDE3] font-poppins">
        <NavBar />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <Testimonial />
        <Footer />
    </div>
</template>

<script setup>
import NavBar from '../components/Navbar.vue';
import HeroSection from '../components/HeroSection.vue';
import AboutSection from '../components/AboutSection.vue';
import ServicesSection from '../components/ServicesSection.vue';
import Testimonial from '../components/Testinmonial.vue';
import Footer from '../components/Footer.vue';
</script>

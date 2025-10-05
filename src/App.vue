<template>
  <div class="app">
    <Navbar />
    <Hero />
    <About />
    <Products />
    <Contact />
    <Footer />
  </div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import About from "./components/About.vue";
import Products from "./components/Products.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
</script>

<style scoped>
.app {
  min-height: 100vh;
  width: 100%;
}
</style>

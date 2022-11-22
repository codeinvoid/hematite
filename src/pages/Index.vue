<template>

  <Footer />
</template>
  
<script setup>
import Footer from '../components/footer/Footer.vue'
window.addEventListener('load', function () {
  var location = 'https://wiki.pkgho.com'
  Turbo.visit(location)
})

</script>
  
  
  
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
  
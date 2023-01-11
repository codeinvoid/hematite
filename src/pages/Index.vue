<template>
  <Header />
  <div class="absolute r-0 l-0 t-0">
    <div class="m-l-85px m-r-85px m-t-45px mb-0">
      <div class="padding-1vw sm:padding-auto">
        <div class="main">
          <div class="t-0 w-740px">
            <div class="p-t-2px p-b-2px p-r-4px p-l-4px max-w-100%">
              <div id="markdown-container"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import Footer from '../components/footer/Footer.vue'
import Header from '../components/header/Header.vue';
</script>

<script>
import Markdoc from '@markdoc/markdoc'
import axios from 'axios';
export default {
  data() {
    return {
      markdown: ''
    }
  },
  methods: {
    getText() {
      axios.get('http://localhost:1337/api/articles/1')
        .then(response => {
          const ast = Markdoc.parse(response.data.data.attributes.content);
          const content = Markdoc.transform(ast);
          document.getElementById('markdown-container').innerHTML = Markdoc.renderers.html(content)
        });
    }
  },
  created() {
    this.getText()
  }
}
</script>
<style scoped>
.main {
  position: absolute;
  left: var(--sidebar-width);
  top: 5.6rem;
  width: calc(100vw - var(--sidebar-width));
  min-height: calc(100vh - 5.6rem);
  display: grid;
  grid-gap: 0;
  grid-template-columns: 1fr clamp(300px, calc(100vw - var(--sidebar-width)), 800px) 1fr;
  font-size: 1.6rem;
}

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

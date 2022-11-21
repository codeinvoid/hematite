<template>
<div>
  <router-view></router-view>
  <div data-controller="clipboard"></div>
  <my-element></my-element>
</div>
</template>

<script setup>
import './element/my-element';
</script>

<style scoped>

</style>

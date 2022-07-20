<script setup lang="ts">
import TheFooter from "./components/TheFooter.vue";
import TheBackgroundImage from "./components/TheBackgroundImage.vue";
</script>

<template>
  <main>
    <TheBackgroundImage></TheBackgroundImage>
    <RouterView></RouterView>
    <TheFooter></TheFooter>
  </main>
</template>

<style scoped></style>

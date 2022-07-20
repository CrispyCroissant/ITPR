<script setup lang="ts">
import AppButton from "../components/AppButton.vue";
</script>

<template>
  <div class="bg-image"></div>
  <div class="flex column">
    <h1 class="title__big">Is this person real?</h1>
    <div class="flex">
      <img src="https://picsum.photos/600" alt="Photo of a person" />
      <div class="flex">
        <AppButton class="red">Not real</AppButton>
        <AppButton class="green">Real</AppButton>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

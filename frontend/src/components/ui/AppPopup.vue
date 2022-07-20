<script setup lang="ts">
defineProps({
  isCorrect: Boolean,
});
</script>

<template>
  <div
    :class="{
      container: true,
      'popup--green': isCorrect,
      'popup--red': !isCorrect,
    }"
  >
    <p v-if="isCorrect" class="popup__text">Correct!</p>
    <p v-if="!isCorrect" class="popup__text">Wrong!</p>
  </div>
</template>

<style scoped>
@import "@/assets/animation.css";

.container {
  display: flex;
  padding: 1rem 2rem;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  color: var(--color-white);

  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);

  animation: fade 0.2s backwards, fade 0.8s 1.5s forwards reverse;
}

.popup--green {
  background-color: var(--color-green);
}

.popup--red {
  background-color: var(--color-red);
}
</style>

<script setup lang="ts">
import { ref } from "vue";
import AppButton from "../components/AppButton.vue";

const score = ref<number>(0);
</script>

<template>
  <div class="bg-image"></div>
  <div class="container container__main">
    <h1 class="title__big">Is this person real?</h1>
    <h2 class="title__subtitle">Score: {{ score }}</h2>
    <div class="container container__image">
      <img
        src="https://picsum.photos/500"
        height="500"
        width="500"
        alt="Photo of a person"
        class="image__person"
      />
      <div class="container container__buttons">
        <AppButton class="red">Not real</AppButton>
        <AppButton class="green">Real</AppButton>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/animation.css";

.container {
  display: flex;
}

.container__main {
  justify-content: center;
  flex-direction: column;
  align-items: center;

  height: 100vh;
  backdrop-filter: blur(12px);
  overflow: hidden;
}

.container__image {
  flex-direction: column;
  animation: slideInBottom 0.5s backwards;
}

.container__image > img {
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.container__buttons {
  justify-content: space-evenly;
}

.image__person {
  margin: 3rem 0;
}

[class^="title"] {
  animation: slideInTop 0.5s backwards;
}

.title__big {
  font-weight: 200;
  font-size: 4rem;
  letter-spacing: 0.05rem;
  color: var(--color-white);
}

.title__subtitle {
  color: var(--color-white);
  font-weight: 200;
}
</style>

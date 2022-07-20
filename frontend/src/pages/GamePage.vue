<script setup lang="ts">
import AppButton from "../components/AppButton.vue";
</script>

<template>
  <div class="bg-image"></div>
  <div class="container container__main">
    <h1 class="title__big">Is this person real?</h1>
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
.container {
  display: flex;
}

.container__main {
  justify-content: center;
  flex-direction: column;
  align-items: center;

  height: 100vh;
  backdrop-filter: blur(2px);
  overflow: hidden;
}

.container__image {
  flex-direction: column;
}

.container__image > img {
  border-radius: 10px;
}

.container__buttons {
  justify-content: space-evenly;
}

.image__person {
  margin: 3rem 0;
}

.title__big {
  font-weight: 200;
  font-size: 4rem;
  letter-spacing: 0.05rem;
  color: var(--color-white);
}
</style>

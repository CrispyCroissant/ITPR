<script setup lang="ts">
import IconGithub from "./icons/IconGithub.vue";
</script>

<template>
  <div class="wrapper">
    <div class="footer">
      <div class="footer__dev">
        <a href="https://github.com/CrispyCroissant/ITPR" class="footer__icon">
          <IconGithub></IconGithub>
        </a>
      </div>

      <p class="footer__text">
        Uses images from
        <a href="https://unsplash.com/">Unsplash</a>
        and
        <a href="https://thispersondoesnotexist.com/">
          thispersondoesnotexist.com
        </a>
      </p>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
}

.footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  max-width: 100%;
  padding: 1rem;
  border-radius: 10px 10px 0 0;
}

.footer__dev {
  display: flex;
}

.footer__icon {
  color: var(--color-grey-1);
  height: 1.2rem;
  width: 1.2rem;
  margin-bottom: 0.5rem;
}

.footer__text {
  color: var(--color-grey-1);
  font-size: 0.75rem;
}

a:link,
a:active {
  text-decoration: none;
  color: var(--color-grey-1);
}
</style>

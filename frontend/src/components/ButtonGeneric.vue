<script setup lang="ts"></script>

<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<style scoped>
.btn {
  border: none;
  background-color: transparent;
  padding: 1rem 3rem;
  border-radius: 60px;

  font-family: "Oswald", sans-serif;
  text-transform: uppercase;
  font-weight: 400;

  box-shadow: 0px 10px 19px 1px rgba(0, 0, 0, 0.51);
  cursor: pointer;

  transition: all 0.2s ease-in-out;
}

.btn:hover {
  transform: scale(1.05) translateY(-2px);
  box-shadow: 0px 10px 12px 1px rgba(0, 0, 0, 0.51);
}

.btn:active {
  transform: translateY(0);
  box-shadow: 0px 3px 8px 1px rgba(0, 0, 0, 0.6);
}

.green {
  background-color: var(--color-green);
  color: var(--color-white);
}
</style>

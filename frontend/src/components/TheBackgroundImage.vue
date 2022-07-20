<template>
  <div class="bg-image"></div>
</template>

<style scoped>
.bg-image {
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("@/assets/bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  z-index: -999;
}
</style>

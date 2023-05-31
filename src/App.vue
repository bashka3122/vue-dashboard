<template>
  <RouterView>
  </RouterView>
</template>

<script>
import DefaultLayout from "./components/defaultLayout.vue";


export default {
  name: 'App',
  components: {

    DefaultLayout
  }
}
</script>


<style>
body {
  background-color: hsl(218, 41%, 15%);
  background-image: radial-gradient(650px circle at 0% 0%,
      hsl(218, 41%, 35%) 15%,
      hsl(218, 41%, 30%) 35%,
      hsl(218, 41%, 20%) 75%,
      hsl(218, 41%, 19%) 80%,
      transparent 100%),
    radial-gradient(1250px circle at 100% 100%,
      hsl(218, 41%, 45%) 15%,
      hsl(218, 41%, 30%) 35%,
      hsl(218, 41%, 20%) 75%,
      hsl(218, 41%, 19%) 80%,
      transparent 100%);
  height: 100vh;
  padding-left: 70px;
  overflow-x: hidden;

}

@media (max-width: 991.98px) {
  body {
    height: 100%;
  }
}

.bg-theme {
  background-color: hsl(218, 41%, 25%);
}

.bg-glass {
  background: hsla(0, 0%, 100%, 0.15);
  backdrop-filter: blur(30px);
}

.text-muted {
  color: hsl(0, 0%, 80%) !important;
}
</style>
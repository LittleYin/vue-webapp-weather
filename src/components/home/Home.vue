<template>
  <div id="Home">
    <div class="header animated bounceInLeft">Welcome</div>
    <my-carousel />
  </div>
</template>

<script>
import MyCarousel from "./MyCarousel"

export default {
  name: "Home",
  components: {
    MyCarousel
  }
};
</script>

<template>
  <footer>
    <p>Copyright &#169; {{ new Date().getFullYear() }} Suhail Chouhan. All Rights Reserved.</p>
    <a href="#projects">
      <font-awesome-icon icon="fa-solid fa-angles-up" class="icon arrow arrow-up" />
    </a>
  </footer>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

<style lang="scss" scoped>
footer {
  position: relative;
  height: 30vh;
  margin: 0 rem(160);
  @include breakpoint-down('sm') {
    height: fit-content;
    margin: 0;
  }
  p {
    text-align: center;
  }
}
</style>

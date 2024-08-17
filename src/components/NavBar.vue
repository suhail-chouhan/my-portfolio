<template>
  <nav class="desktop-nav">
    <div class="logo">Suhail Chouhan</div>
    <div>
      <ul class="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav>
  <nav class="hamburger-nav">
    <div class="logo">Suhail Chouhan</div>
    <div class="hamburger-menu">
      <div class="hamburger-icon" @click="toggleMenu" :class="{ open: showMenu }">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="menu-links" v-if="showMenu" :class="{ open: showMenu }">
        <a href="#about" @click="toggleMenu">About</a>
        <a href="#experience" @click="toggleMenu">Experience</a>
        <a href="#projects" @click="toggleMenu">Projects</a>
        <a href="#contact" @click="toggleMenu">Contact</a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const showMenu = ref(false)
function toggleMenu() {
  showMenu.value = !showMenu.value
}
</script>

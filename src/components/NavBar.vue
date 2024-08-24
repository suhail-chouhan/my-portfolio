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
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const showMenu = ref(false)
function toggleMenu() {
  showMenu.value = !showMenu.value
}
onMounted(() => {
  const desktopTimeline = gsap.timeline()
  desktopTimeline.from('.logo', {
    opacity: 0,
    duration: 1,
    x: '-100vw'
  })
  desktopTimeline.from('.desktop-nav .nav-links li', {
    x: '100vw',
    opacity: 0,
    stagger: 0.5
  })
})
</script>
<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: rem(64);
  position: sticky;
  top: 0;
  width: 100vw;
  z-index: 1;
  background-color: $light;
  .nav-links {
    display: flex;
    gap: 2rem;
    list-style: none;
    font-size: 1.5rem;
    a {
      color: $dark;
      text-decoration: none;
      text-decoration-color: $light;
      &:hover {
        color: $light-gray;
        text-decoration: underline;
        text-underline-offset: 1rem;
        text-decoration-color: $light-gray;
      }
      @include breakpoint-down('sm') {
        font-size: rem(16);
      }
    }
    @include breakpoint-down('sm') {
      flex-direction: column;
      gap: rem(8);
      text-align: center;
    }
  }
  &.desktop-nav {
    @include breakpoint-down('md') {
      display: none;
    }
  }
  &.hamburger-nav {
    display: none;
    .hamburger-menu {
      position: relative;
      display: inline-block;
      z-index: 1;
      .hamburger-icon {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: rem(24);
        width: rem(30);
        cursor: pointer;
        span {
          width: 100%;
          height: rem(2);
          background-color: $dark;
          transition: all 0.3 ease-in-out;
          &:first-child {
            transform: none;
          }
          &:nth-child(2) {
            opacity: 1;
          }
          &:last-child {
            transform: none;
          }
        }
        &.open {
          span {
            &:first-child {
              transform: rotate(45deg) translate(rem(10), rem(5));
            }
            &:nth-child(2) {
              opacity: 0;
            }
            &:last-child {
              transform: rotate(-45deg) translate(rem(10), rem(-5));
            }
          }
        }
      }
      .menu-links {
        position: absolute;
        top: 100%;
        right: 0;
        background-color: rgba($light, 0.8);
        width: fit-content;
        max-width: rem(300);
        overflow: hidden;
        transition: all 0.3 ease-in-out;
        a {
          display: block;
          padding: rem(10);
          text-align: center;
          font-size: rem(24);
          color: $dark;
          text-decoration: none;
          transition: all 0.3 ease-in-out;
        }
      }
    }
    @include breakpoint-down('md') {
      display: flex;
    }
  }
  .logo {
    font-size: 2rem;
    &:hover {
      cursor: default;
    }
    @include breakpoint-down('sm') {
      font-size: rem(24);
    }
  }
}
</style>

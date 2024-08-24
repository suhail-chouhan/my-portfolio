<template>
  <section id="contact">
    <div class="section__text">
      <p class="section__text__p1">Get In Touch</p>
      <h1 class="title">Contact Me</h1>
    </div>
    <div class="contact-info-upper-container">
      <div class="contact-info-container">
        <font-awesome-icon icon="fa-solid fa-envelope" class="icon small" />
        <p>
          <a href="mailto:suhailchouhandev@gmail.com">suhailchouhandev@gmail.com</a>
        </p>
      </div>
      <div class="contact-info-container">
        <font-awesome-icon icon="fa-brands fa-linkedin-in" class="icon small" />
        <p>
          <a href="https://www.linkedin.com/in/suhailchouhan" target="_blank">LinkedIn</a>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { onMounted } from 'vue'
onMounted(() => {
  const contactTimeline = gsap.timeline({
    paused: true
  })

  contactTimeline.from('#contact .section__text > *', {
    opacity: 0,
    duration: 1.25,
    ease: 'bounce.out',
    y: -500
  })
  contactTimeline.from('#contact .contact-info-upper-container', {
    opacity: 0,
    x: '-100vw',
    duration: 1
  })
  ScrollTrigger.create({
    trigger: '#contact',
    onEnter: () => {
      contactTimeline.play()
    }
  })
})
</script>

<style lang="scss" scoped></style>

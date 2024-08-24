<template>
  <section id="profile">
    <div class="section__pic-container">
      <img src="@/assets/images/profile-pic-1.png" alt="Suhail Chouhan Picture" />
    </div>
    <div class="section__text">
      <p class="section__text__p1">Hello I'm</p>
      <h1 class="title">Suhail Chouhan</h1>
      <p class="section__text__p2">Frontend Developer</p>
      <div class="btn-container d-flex justify-center gap-1">
        <a class="btn btn-secondary btn-outlined" @click="openResume">Download CV</a>
        <a class="btn btn-primary" href="#contact">Contact Info</a>
      </div>
      <div class="social-container">
        <a href="https://www.linkedin.com/in/suhailchouhan" target="_blank" class="icon">
          <font-awesome-icon icon="fa-brands fa-linkedin-in" class="icon" />
        </a>
        <a href="https://github.com/suhail-chouhan" target="_blank" class="icon">
          <font-awesome-icon icon="fa-brands fa-github" class="icon" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import gsap from 'gsap'
import { onMounted } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import ScrollTrigger from 'gsap/ScrollTrigger'
onMounted(() => {
  const profileTimeline = gsap.timeline({
    paused: true
  })
  profileTimeline.from('#profile .section__pic-container img', {
    opacity: 0,
    duration: 2,
    scale: 0
  })
  profileTimeline.from('#profile .section__text > *', {
    y: '-100%',
    opacity: 0,
    duration: 1,
    stagger: 0.5,
    ease: 'power2.out'
  })
  ScrollTrigger.create({
    trigger: '#profile',
    start: '-5 50%',
    onEnter: () => {
      profileTimeline.play()
    },
    onEnterBack: () => {
      profileTimeline.restart()
    }
  })
})
function openResume() {
  const baseUrl = import.meta.env.BASE_URL
  fetch(`${baseUrl}/Suhail-Resume.pdf`, {
    method: 'GET',
    headers: { Accept: '*/*' }
  })
    .then((res) => res.blob())
    .then((blob) => {
      const resumeURL = URL.createObjectURL(blob)
      window.open(resumeURL, '_blank')
    })
}
</script>

<style lang="scss" scoped></style>

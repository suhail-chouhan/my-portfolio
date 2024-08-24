<template>
  <section id="about">
    <div class="section__text">
      <p class="section__text__p1">Get To Know More</p>
      <h1 class="title">About Me</h1>
    </div>
    <div class="section-container">
      <div class="section__pic-container">
        <img src="@/assets/images/about-pic-2.png" alt="Profile picture" class="about-pic" />
      </div>
      <div class="about-details-container">
        <div class="about-containers">
          <div class="details-container">
            <font-awesome-icon icon="fa-solid fa-award" class="icon" />
            <h3>Experience</h3>
            <p>4+ years<br />Frontend Development</p>
          </div>
          <div class="details-container">
            <font-awesome-icon icon="fa-solid fa-building-columns" class="icon" />
            <h3>Education</h3>
            <p>
              B.Tech<br />
              Computer Science
            </p>
          </div>
        </div>

        <div class="text-container">
          <p>
            With more than four years of experience as a mid-level developer, I concentrate on
            frontend development, dedicated to building scalable and efficient web applications.<br />
            My skill set includes a strong command of core JavaScript and its frameworks,
            particularly VueJs.<br />
            I take pride in guiding projects from initial concept to final deployment, consistently
            delivering high-quality results.<br />
            I am looking for opportunities that will enable me to utilize my skills in a challenging
            environment that encourage and makes a significant impact.
          </p>
        </div>
      </div>
    </div>
    <a href="#profile">
      <font-awesome-icon icon="fa-solid fa-angles-up" class="icon arrow" />
    </a>
    <a href="#experience">
      <font-awesome-icon icon="fa-solid fa-angles-down" class="icon arrow arrow-up" />
    </a>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

onMounted(() => {
  const aboutTimeline = gsap.timeline({
    paused: true
  })

  aboutTimeline.from('#about .section__text > *', {
    opacity: 0,
    duration: 1.25,
    ease: 'bounce.out',
    y: -500
  })
  aboutTimeline.from('#about .section-container .section__pic-container img', {
    x: '-500%',
    duration: 1
  })
  aboutTimeline.from('#about .about-details-container .about-containers .details-container', {
    opacity: 0,
    duration: 0.8
  })
  aboutTimeline.from('#about .about-details-container .text-container p', {
    opacity: 0,
    x: '100vw',
    duration: 0.5
  })

  ScrollTrigger.create({
    trigger: '#profile',
    onEnter: () => {
      aboutTimeline.play()
    }
  })
})
</script>

<style lang="scss" scoped></style>

<template>
  <section id="projects">
    <div class="section__text">
      <p class="section__text__p1">Browse My Recent</p>
      <h1 class="title">Projects</h1>
    </div>
    <div class="experience-details-container">
      <div class="about-containers">
        <div class="details-container color-container">
          <div class="article-container">
            <img src="@/assets/images/project-1.png" alt="Project Image" />
          </div>
          <h2 class="experience-sub-title project-title">Project-1</h2>
          <div class="d-flex justify-center gap-1">
            <a href="#" class="btn btn-secondary project-btn btn-outlined">Github</a>
            <a href="#" class="btn btn-secondary project-btn btn-outlined">Live Demo</a>
          </div>
        </div>
        <div class="details-container color-container">
          <div class="article-container">
            <img src="@/assets/images/project-2.png" alt="Project Image" />
          </div>
          <h2 class="experience-sub-title project-title">Project-2</h2>
          <div class="d-flex justify-center gap-1">
            <a href="#" class="btn btn-secondary project-btn btn-outlined">Github</a>
            <a href="#" class="btn btn-secondary project-btn btn-outlined">Live Demo</a>
          </div>
        </div>
        <div class="details-container color-container">
          <div class="article-container">
            <img src="@/assets/images/project-3.png" alt="Project Image" />
          </div>
          <h2 class="experience-sub-title project-title">Project-3</h2>
          <div class="d-flex justify-center gap-1">
            <a href="#" class="btn btn-secondary project-btn btn-outlined">Github</a>
            <a href="#" class="btn btn-secondary project-btn btn-outlined">Live Demo</a>
          </div>
        </div>
      </div>
    </div>
    <a href="#experience">
      <font-awesome-icon icon="fa-solid fa-angles-up" class="icon arrow" />
    </a>
    <a href="#contact">
      <font-awesome-icon icon="fa-solid fa-angles-down" class="icon arrow arrow-up" />
    </a>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import ScrollTrigger from 'gsap/ScrollTrigger'

onMounted(() => {
  const projectsTimeline = gsap.timeline({
    paused: true
  })

  projectsTimeline.from('#projects .section__text > *', {
    opacity: 0,
    duration: 1.25,
    ease: 'bounce.out',
    y: -500
  })
  projectsTimeline.from(
    '#projects .experience-details-container .about-containers .details-container',
    {
      opacity: 0,
      x: '-100vw',
      stagger: {
        from: window.outerWidth <= 768 ? 'start' : 'end',
        amount: 0.8
      },
      duration: 0.8
    }
  )
  ScrollTrigger.create({
    trigger: '#projects',
    onEnter: () => {
      projectsTimeline.play()
    }
  })
})
</script>

<style lang="scss" scoped></style>

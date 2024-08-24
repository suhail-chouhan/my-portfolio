<template>
  <section id="experience">
    <div class="section__text">
      <p class="section__text__p1">Explore My</p>
      <h1 class="title">Experience</h1>
    </div>
    <div class="experience-details-container">
      <div class="about-containers">
        <div class="details-container" v-for="experience in experienceList" :key="experience.title">
          <h2 class="experience-sub-title">{{ experience.title }}</h2>
          <div class="article-container">
            <article v-for="technology in experience.techList" :key="technology.name">
              <font-awesome-icon icon="fa-solid fa-circle-check" class="icon" />
              <div>
                <h3>{{ technology.name }}</h3>
                <p>{{ technology.proficiency }}</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
    <a href="#about">
      <font-awesome-icon icon="fa-solid fa-angles-up" class="icon arrow" />
    </a>
    <a href="#projects">
      <font-awesome-icon icon="fa-solid fa-angles-down" class="icon arrow arrow-up" />
    </a>
  </section>
</template>

<script setup>
import gsap from 'gsap'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { onMounted, ref } from 'vue'
import ScrollTrigger from 'gsap/ScrollTrigger'
const experienceList = ref([
  {
    title: 'Frontend Development',
    techList: [
      {
        name: 'HTML',
        proficiency: 'Experienced'
      },
      {
        name: 'CSS',
        proficiency: 'Experienced'
      },
      {
        name: 'Javascript',
        proficiency: 'Experienced'
      },
      {
        name: 'Vue Js',
        proficiency: 'Experienced'
      },
      {
        name: 'Nuxt Js',
        proficiency: 'Experienced'
      },
      {
        name: 'SASS',
        proficiency: 'Intermidiate'
      },
      {
        name: 'TypeScript',
        proficiency: 'Intermidiate'
      },
      {
        name: 'JQuery',
        proficiency: 'Intermidiate'
      }
    ]
  },
  {
    title: 'Other Development Tech',
    techList: [
      {
        name: 'Node Js',
        proficiency: 'Beginner'
      },
      {
        name: 'MongoDB',
        proficiency: 'Beginner'
      },
      {
        name: 'Express Js',
        proficiency: 'Beginner'
      },
      {
        name: 'Git',
        proficiency: 'Experienced'
      }
    ]
  }
])
onMounted(() => {
  const experienceTimeline = gsap.timeline({
    paused: true
  })

  experienceTimeline.from('#experience .section__text > *', {
    opacity: 0,
    duration: 1.25,
    ease: 'bounce.out',
    y: -500
  })
  experienceTimeline.from(
    '#experience .experience-details-container .about-containers .details-container',
    {
      opacity: 0,
      x: '-100vw',
      stagger: {
        from: 'end',
        amount: 0.8
      },
      duration: 0.8
    }
  )
  ScrollTrigger.create({
    trigger: '#experience',
    onEnter: () => {
      experienceTimeline.play()
    }
  })
})
</script>

<style lang="scss" scoped></style>

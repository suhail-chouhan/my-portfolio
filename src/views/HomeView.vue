<template>
  <main>
    <NavBar />
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
    <section id="about">
      <div class="section__text">
        <p class="section__text__p1">Get To Know More</p>
        <h1 class="title">About Me</h1>
      </div>
      <div class="section-container">
        <div class="section__pic-container">
          <img src="@/assets/images/about-pic-1.png" alt="Profile picture" class="about-pic" />
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
              frontend development, dedicated to building scalable and efficient web
              applications.<br />
              My skill set includes a strong command of core JavaScript and its frameworks,
              particularly VueJs.<br />
              I take pride in guiding projects from initial concept to final deployment,
              consistently delivering high-quality results.<br />
              I am looking for opportunities that will enable me to utilize my skills in a
              challenging environment that encourage and makes a significant impact.
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
    <section id="experience">
      <div class="section__text">
        <p class="section__text__p1">Explore My</p>
        <h1 class="title">Experience</h1>
      </div>
      <div class="experience-details-container">
        <div class="about-containers">
          <div
            class="details-container"
            v-for="experience in experienceList"
            :key="experience.title"
          >
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
    <footer>
      <nav>
        <div class="nav-links-container">
          <ul class="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <p>Copyright &#169; {{ new Date().getFullYear() }} Suhail Chouhan. All Rights Reserved.</p>
      <a href="#projects">
        <font-awesome-icon icon="fa-solid fa-angles-up" class="icon arrow arrow-up" />
      </a>
    </footer>
  </main>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { ref } from 'vue'
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
function openResume() {
  let baseUrl = import.meta.env.BASE_URL
  if (import.meta.env.PROD) {
    baseUrl = '/'
  }
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

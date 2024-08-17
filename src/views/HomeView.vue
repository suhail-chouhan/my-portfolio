<template>
  <main>
    <NavBar />
    <section id="profile">
      <div class="section__pic-container">
        <img src="@/assets/images/profile-pic.png" alt="Suhail Chouhan Picture" />
      </div>
      <div class="section__text">
        <p class="section__text__p1">Hello I'm</p>
        <h1 class="title">Suhail Chouhan</h1>
        <p class="section__text__p2">Frontend Developer</p>
        <div class="btn-container d-flex justify-center gap-1">
          <a class="btn btn-secondary btn-outlined" @click="downloadResume">Download CV</a>
          <a class="btn btn-primary" href="#contact">Contact Info</a>
        </div>
        <div class="social-container">
          <a href="https://www.linkedin.com/in/suhailchouhan" target="_blank" class="icon">
            <img src="@/assets/images/linkedin.png" alt="My Linkedin Profile" />
          </a>
          <a href="https://github.com/suhail-chouhan" target="_blank" class="icon">
            <img src="@/assets/images/github.png" alt="My Github Profile" />
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
          <img src="@/assets/images/about-pic.png" alt="Profile picture" class="about-pic" />
        </div>
        <div class="about-details-container">
          <div class="about-containers">
            <div class="details-container">
              <img src="@/assets/images/experience.png" alt="Experience icon" class="icon" />
              <h3>Experience</h3>
              <p>2+ years<br />Frontend Development</p>
            </div>
            <div class="details-container">
              <img src="@/assets/images/education.png" alt="education icon" class="icon" />
              <h3>Education</h3>
              <p>B.Tech Computer Science</p>
            </div>
          </div>

          <div class="text-container">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eveniet atque ipsa
              aspernatur id voluptatem obcaecati itaque perferendis odio dignissimos nobis adipisci
              aliquam iusto, consectetur fuga cumque delectus nesciunt, blanditiis iure voluptate?
              Nemo exercitationem aliquam reiciendis. Corrupti sit vitae voluptas, laborum nulla
              explicabo ratione accusamus veritatis. Veritatis harum reprehenderit magni.
            </p>
          </div>
        </div>
      </div>
      <a href="#experience">
        <img src="@/assets/images/arrow.png" alt="Downward arrow" class="icon arrow" />
      </a>
      <a href="#profile">
        <img src="@/assets/images/arrow.png" alt="Downward arrow-up" class="icon arrow arrow-up" />
      </a>
    </section>
    <section id="experience">
      <div class="section__text">
        <p class="section__text__p1">Explore My</p>
        <h1 class="title">Experience</h1>
      </div>
      <div class="experience-details-container">
        <div class="about-containers">
          <div class="details-container">
            <h2 class="experience-sub-title">Frontent Development</h2>
            <div class="article-container">
              <article>
                <img src="@/assets/images/checkmark.png" alt="Experience icon" class="icon" />
                <div>
                  <h3>HTML</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img src="@/assets/images/checkmark.png" alt="Experience icon" class="icon" />
                <div>
                  <h3>Css</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img src="@/assets/images/checkmark.png" alt="Experience icon" class="icon" />
                <div>
                  <h3>SASS</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img src="@/assets/images/checkmark.png" alt="Experience icon" class="icon" />
                <div>
                  <h3>JavaScript</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img src="@/assets/images/checkmark.png" alt="Experience icon" class="icon" />
                <div>
                  <h3>TypeScript</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img src="@/assets/images/checkmark.png" alt="Experience icon" class="icon" />
                <div>
                  <h3>Vuetify</h3>
                  <p>Experienced</p>
                </div>
              </article>
            </div>
          </div>
          <div class="details-container">
            <h2 class="experience-sub-title">Frontent Development</h2>
            <div class="article-container">
              <article>
                <img src="@/assets/images/checkmark.png" alt="Experience icon" class="icon" />
                <div>
                  <h3>NodeJs</h3>
                  <p>Beginner</p>
                </div>
              </article>
              <article>
                <img src="@/assets/images/checkmark.png" alt="Experience icon" class="icon" />
                <div>
                  <h3>MongoDB</h3>
                  <p>Beginner</p>
                </div>
              </article>
              <article>
                <img src="@/assets/images/checkmark.png" alt="Experience icon" class="icon" />
                <div>
                  <h3>Express Js</h3>
                  <p>Beginner</p>
                </div>
              </article>
              <article>
                <img src="@/assets/images/checkmark.png" alt="Experience icon" class="icon" />
                <div>
                  <h3>Git</h3>
                  <p>Experienced</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <a href="#projects">
        <img src="@/assets/images/arrow.png" alt="Downward arrow" class="icon arrow" />
      </a>
      <a href="#about">
        <img src="@/assets/images/arrow.png" alt="Downward arrow-up" class="icon arrow arrow-up" />
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
      <a href="#contact">
        <img src="@/assets/images/arrow.png" alt="Downward arrow" class="icon arrow" />
      </a>
      <a href="#experience">
        <img src="@/assets/images/arrow.png" alt="Downward arrow-up" class="icon arrow arrow-up" />
      </a>
    </section>
    <section id="contact">
      <div class="section__text">
        <p class="section__text__p1">Get In Touch</p>
        <h1 class="title">Contact Me</h1>
      </div>
      <div class="contact-info-upper-container">
        <div class="contact-info-container">
          <img src="@/assets/images/email.png" alt="Email icon" class="icon contact-icon scale" />
          <p>
            <a href="mailto:suhailchouhandev@gmail.com">suhailchouhandev@gmail.com</a>
          </p>
        </div>
        <div class="contact-info-container">
          <img src="@/assets/images/linkedin.png" alt="LinkedIn icon" class="icon contact-icon" />
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
      <p>Copyright &#169; 2024 Suhail Chouhan. All Rights Reserved.</p>
      <a href="#projects">
        <img src="@/assets/images/arrow.png" alt="Downward arrow-up" class="icon arrow arrow-up" />
      </a>
    </footer>
  </main>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'

function downloadResume() {
  window.open('../assets/images/resume-example.pdf', '_blank')
}
</script>

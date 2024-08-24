import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
ScrollTrigger.defaults({
  markers: true,
  start: `-5px ${window.outerWidth <= 768 ? 'top' : '50%'}`,
  end: 'bottom bottom'
})

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faAward,
  faBuildingColumns,
  faAnglesUp,
  faAnglesDown,
  faEnvelope,
  faCircleCheck
} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(
  faLinkedinIn,
  faGithub,
  faAward,
  faBuildingColumns,
  faAnglesUp,
  faAnglesDown,
  faEnvelope,
  faCircleCheck
)

const app = createApp(App)

app.use(router)
app.mount('#app')

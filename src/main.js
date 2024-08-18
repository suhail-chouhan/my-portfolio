import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

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

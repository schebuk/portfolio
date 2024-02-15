import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import http from './http';
import PrimeVue from 'primevue/config';
import Timeline from 'primevue/timeline';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import AnimateOnScroll from 'primevue/animateonscroll';

import 'primevue/resources/themes/aura-light-green/theme.css'

import 'bootstrap/dist/css/bootstrap.css';

import { library, dom } from '@fortawesome/fontawesome-svg-core';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCopyright, faFilePdf, faCode, faEye , faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faInstagramSquare, faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'

const app = createApp(App);

app.directive('animateonscroll', AnimateOnScroll);

library.add(faCopyright, faFacebookSquare, faInstagramSquare, faLinkedin, faGithubSquare, faFilePdf, faCode, faEye, faEyeSlash)

app.use(PrimeVue, { ripple: true });

app.component('Timeline', Timeline);
app.component('font-awesome-icon', FontAwesomeIcon)
app.config.productionTip = false

dom.watch();

app.use(router);
app.config.globalProperties.$http = http;
app.mount('#app');
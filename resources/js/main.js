import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';
import Timeline from 'primevue/timeline';
import 'primevue/resources/themes/saga-blue/theme.css'; // Exemplo de tema, substitua pelo tema desejado
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import AnimateOnScroll from 'primevue/animateonscroll';

import 'primevue/resources/themes/aura-light-green/theme.css'

import 'bootstrap/dist/css/bootstrap.css';

import { library, dom } from '@fortawesome/fontawesome-svg-core';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCopyright, faFilePdf, faCode} from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faInstagramSquare, faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'

const app = createApp(App);

app.directive('animateonscroll', AnimateOnScroll);

library.add(faCopyright, faFacebookSquare, faInstagramSquare, faLinkedin, faGithubSquare, faFilePdf, faCode)

app.use(PrimeVue, { ripple: true });

app.component('Timeline', Timeline);
app.component('font-awesome-icon', FontAwesomeIcon)
app.config.productionTip = false

dom.watch();

app.use(router);
app.mount('#app');
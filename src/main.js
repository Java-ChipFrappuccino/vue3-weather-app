import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
// import store from './store/store.js';
import { createPinia } from 'pinia';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* 사용할 아이콘 불러오기 */
import {
  faBarsStaggered,
  faLocationDot,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';

/* 라이브러리에 아이콘 등록 */
library.add(faBarsStaggered, faLocationDot, faMagnifyingGlass);

const pinia = createPinia(); // pinia 객체를 가져와 변수에 할당

createApp(App)
  // .use(store)
  .use(pinia)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');

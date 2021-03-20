import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import './scss/main.scss';
import VueRouter from 'vue-router';
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import Rehearsals from './views/Rehearsals';
import Weddings from './views/Weddings';
import NotFound from './views/NotFound';

Vue.use(VueRouter)

const router = new VueRouter({
  mode:'history',
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/rehearsals', component: Rehearsals},
    { path: '/weddings', component: Weddings},
    { path: '*', component: NotFound },
  ]
});

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

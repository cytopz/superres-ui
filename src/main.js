import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import {
  applyPolyfills,
  defineCustomElements,
} from 'img-comparison-slider/loader';

Vue.config.productionTip = false
Vue.config.ignoredElements = [/test-\w*/];

applyPolyfills().then(() => {
  defineCustomElements(window);
})

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

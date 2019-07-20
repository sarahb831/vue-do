import Vue from 'vue';
import VueMaterial from 'vue-material';
import { MdField, MdButton, MdCheckbox, MdList, MdDivider } from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import App from './App.vue';

Vue.use(VueMaterial);
Vue.use(MdField);
Vue.use(MdButton);
Vue.use(MdCheckbox);
Vue.use(MdList);
Vue.use(MdDivider);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


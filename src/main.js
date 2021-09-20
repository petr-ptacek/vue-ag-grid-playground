import Vue                from 'vue';
import App                from './App.vue';
import CubeComponent      from '@/components/CubeComponent';
import SimpleCellRenderer from '@/components/SimpleCellRenderer';

Vue.config.productionTip = false;

Vue.component(CubeComponent.name, CubeComponent);
Vue.component(SimpleCellRenderer.name, SimpleCellRenderer);

new Vue({
  render: h => h(App)
}).$mount('#app');
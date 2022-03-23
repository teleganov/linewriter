import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

window.focusItemEvent = {
  listeners: [],
  register(listener) {
    this.listeners.push(listener);
  },
  focusItem(itemUid) {
    this.listeners.forEach(listener => listener(itemUid));
  }
}

new Vue({
  render: h => h(App),
}).$mount('#app')

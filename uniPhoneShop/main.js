import Vue from 'vue'
import App from './App'

import divider from '@/components/common/divider.vue';

Vue.config.productionTip = false

Vue.component('divider',divider)

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

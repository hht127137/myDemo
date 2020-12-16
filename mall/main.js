import Vue from 'vue'
import App from './App'

Vue.prototype.baseUrl="http://47.56.173.44/shopdemo/public/uploads/20190905/"
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

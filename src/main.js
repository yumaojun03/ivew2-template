import Vue from 'vue'
import App from './App'
import router from './router'
import VueMarkdown from 'vue-markdown'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import VueQuillEditor from 'vue-quill-editor'
import IEcharts from 'vue-echarts-v3'
import axios from 'axios'

Vue.use(iView)
Vue.use(VueMarkdown)
Vue.use(IEcharts)

Vue.prototype.axios = axios
Vue.config.productionTip = false
axios.defaults.headers.common = {
  'X-CSRF-TOKEN': document.querySelector('meta[name=csrf-token]').getAttribute('content'),
  'X-Requested-With': 'XMLHttpRequest'
};
axios.defaults.baseURL = 'http://localhost:8001'

new Vue({
    el: '#app',
    axios,
    router,
    VueMarkdown,
    template: '<App/>',
    components: { App }
})

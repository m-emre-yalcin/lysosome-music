import Vue from 'vue'
import Dexie from 'dexie'
import App from './App.vue'
import router from './router'
import store from './store'

// db structure
const db = new Dexie('LSM')
db.version(3.3).stores({ musicFiles: '++id,path,dir,name,listenCount,fileStats', musicDirectories: '++id,path,active' })

Vue.config.productionTip = false
Vue.prototype.$db = db

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')

/** Vue imports */
import Vue from 'vue'
import Vuex from 'vuex'

/** Modules imports */
import mail from '@/store/modules/mail'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    images:[
      {name : '1',title:"Altitude"},
      {name : '2',title:"Apaches 555"},
      {name : '3',title:"Torre Finox"},
      {name : '6',title:"Soriana Las Águilas"},
      {name : '7',title:"Casa de Abraham Rodriguez"}
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    mail
  }
})

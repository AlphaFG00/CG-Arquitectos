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
      {name : '4',title:"Huasteca"},
      {name : '5',title:"Casa de León David"},
      {name : '6',title:"Soriana Las Águilas"}
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

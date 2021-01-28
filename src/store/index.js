import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    person: '',
    contacts: [
      { name: 'Kurt Cobain', id: 1, tel: '8999 444 33 22' },
      { name: 'Till Lindeman', id: 2, tel: '8545 434 31 32' },
      { name: 'David Dreyman', id: 3, tel: '8433 475 37 52' },
    ],
  },
  actions: {
    async passLink(ctx, newLink) {
      for (let i = 0; i < this.state.contacts.length; i++) {
        if (this.state.contacts[i].id == newLink) {
          // const person = Object.assign({}, this.state.contacts[i])
          const person = this.state.contacts[i]
          console.log(person)
        }
      }
      console.log(person)
      ctx.commit('getPerson', person)
    },
  },
  mutations: {
    getPerson(state, person) {
      state.person = person
    },
  },
  getters: {
    returnContacts(state) {
      return state.contacts
    },
    returnPerson(state) {
      return state.person
    },
  },
})

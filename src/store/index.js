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
        var person
        if (this.state.contacts[i].id == newLink) {
          person = this.state.contacts[i]
        }
      }
      ctx.commit('getPerson', person)
    },
    async passContact(ctx, newContact) {
      ctx.commit('addContact', newContact)
    },
  },
  mutations: {
    getPerson(state, person) {
      state.person = person
    },
    addContact(state, newContact) {
      state.contacts.push(newContact)
    },
  },
  getters: {
    RETURN_CONTACTS(state) {
      return state.contacts
    },
    RETURN_PERSON(state) {
      state.person = Object.entries(state.person)
      return state.person
    },
  },
})

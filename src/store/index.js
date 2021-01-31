import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    person: '',
    contacts: [],
    newFieldArr: [],
    updatePerson: '',
    arr: [],
  },
  actions: {
    async passLink(ctx, newLink) {
      for (let i = 0; i < this.state.contacts.length; i++) {
        var person
        if (this.state.contacts[i].name == newLink) {
          person = this.state.contacts[i]
        }
      }
      ctx.commit('getPerson', person)
    },
    async passContact(ctx, newContact) {
      ctx.commit('addContact', newContact)
    },
    async passDeleteLink(ctx, deleteLink) {
      ctx.commit('deleteContact', deleteLink)
    },
    async passNewField(ctx, newField) {
      ctx.commit('addField', newField)
    },
  },
  mutations: {
    getPerson(state, person) {
      state.person = person
      state.arr = []
    },
    addContact(state, newContact) {
      state.contacts.push(newContact)
    },
    deleteContact(state, deleteLink) {
      for (let i = 0; i < state.contacts.length; i++) {
        if (state.contacts[i].name == deleteLink) {
          if (confirm('You really want to delete this contact?')) {
            state.contacts.splice(i, 1)
          } else {
            console.log('Ok, be carefull')
          }
        }
      }
    },
    addField(state, newField) {
      state.arr.push(newField)
      // state.arr.push(state.person)
      // state.arr.push(newField)
      // state.arr = []
      // console.log(state.arr)
      // state.updatePerson.push(newField)
      // state.newFieldArr.push(newField)
      // state.newFieldArr = []
    },
  },
  getters: {
    RETURN_CONTACTS(state) {
      return state.contacts
    },
    RETURN_PERSON(state) {
      console.log(state.arr)
      // if (state.arr[0] !== {}) {
      //   state.arr.splice(0, 1)
      //   state.arr.push(state.person)
      // }
      if (state.arr.length === 0) {
        state.arr.push(state.person)
      }
      if (state.arr[0] === '') {
        console.log('hi')
        // state.arr.push(state.person)
        state.arr.splice(0, 1)
      }
      // if (state.arr[0] == '') {
      //   console.log('hi')
      //   state.arr.push(state.person)
      //   state.arr.splice(0, 1)
      //   console.log(state.arr)
      // } else {
      // }
      // state.arr = []
      // state.arr.push(state.person)
      // state.person = Object.entries(state.person)
      // return state.person
      return state.arr
    },
    // RETURN_FIELD(state) {
    //   return state.newFieldArr
    // },
  },
})

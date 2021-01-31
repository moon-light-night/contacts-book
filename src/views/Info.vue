<template>
  <div>
    <ul>
      <li v-for="(person, index) in RETURN_PERSON" :key="index">
        {{ `${person[0]} - ${person[1]}` }}
      </li>

      <div v-if="RETURN_FIELD">
        <ul v-for="(field, index) in RETURN_FIELD" :key="index">
          <li>{{ field[0] }} - {{ field[1] }}<br /></li>
        </ul>
      </div>

      <a @click="$router.push({ name: 'Contacts' })">to contacts</a
      ><br />
      <a @click="$router.push({ name: 'Home' })">to main</a
      ><br />
      <a v-if="isActive" @click="isActive = !isActive">add field</a>
      <table v-else-if="!isActive">
        <input id="name" type="text" placeholder="name" />
        <input id="value" type="text" placeholder="value" />
        <button @click="addField">add</button>
      </table>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      isActive: true,
      entries: [],
    }
  },
  computed: mapGetters(['RETURN_PERSON', 'RETURN_FIELD']),
  methods: {
    addField() {
      this.entries.push(document.querySelector('#name').value)
      this.entries.push(document.querySelector('#value').value)
      document.querySelector('#value').value = ''
      document.querySelector('#name').value = ''
      this.$store.dispatch('passNewField', this.entries)
      this.entries = []
    },
  },
}
</script>

<style lang="scss" scoped>
li {
  list-style-type: none;
}
</style>

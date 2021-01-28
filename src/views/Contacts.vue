<template>
  <div>
    <ul v-for="contact in returnContacts" :key="contact.id">
      <li>
        <a
          @click="$router.push({ name: 'ContactsInfo' }), getId()"
          :id="contact.id"
          >{{ contact.name }}</a
        >
      </li>
    </ul>
    <a @click="$router.push({ name: 'ContactsInfo' })">show info</a>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      link: '',
    }
  },
  computed: mapGetters(['returnContacts']),
  methods: {
    getId() {
      this.link = event.target.id
      this.$store.dispatch('passLink', this.link)
    },
  },
}
</script>

<style lang="scss" scoped>
li {
  list-style-type: none;
  a {
    text-decoration: none;
    cursor: pointer;
  }
}
</style>

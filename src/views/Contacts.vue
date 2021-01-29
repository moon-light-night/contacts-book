<template>
  <div>
    <ul v-for="contact in RETURN_CONTACTS" :key="contact.id">
      <li>
        <a
          @click="$router.push({ name: 'ContactsInfo' }), getId()"
          :id="contact.id"
          >{{ contact.name }}</a
        >
      </li>
    </ul>
    <input id="name" type="text" placeholder="name" />
    <input id="id" type="text" placeholder="id" />
    <input id="tel" type="text" placeholder="tel" />
    <button @click="sendData">click</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      link: '',
      name: '',
      id: '',
      tel: '',
      newContact: {},
    }
  },
  computed: mapGetters(['RETURN_CONTACTS']),
  methods: {
    getId() {
      this.link = event.target.id
      this.$store.dispatch('passLink', this.link)
    },
    sendData() {
      this.newContact['name'] = document.getElementById('name').value
      this.newContact['id'] = document.getElementById('id').value
      this.newContact['tel'] = document.getElementById('tel').value
      console.log(this.newContact)
      this.$store.dispatch('passContact', this.newContact)
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

<template>
  <div>
    <ul v-for="(contact, index) in RETURN_CONTACTS" :key="index">
      <li>
        <a
          @click.ctrl="deleteContact"
          @click.exact="$router.push({ name: 'ContactsInfo' }), getId()"
          :id="contact.name"
          >{{ contact.name }}</a
        >
      </li>
    </ul>
    <input id="name" type="text" placeholder="name" />
    <!-- <input id="tel" type="text" placeholder="tel" /> -->
    <button @click="sendData">click</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      link: '',
      deleteLink: '',
      name: '',
      // tel: '',
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
      // this.newContact['tel'] = document.getElementById('tel').value
      document.getElementById('name').value = ''
      // document.getElementById('tel').value = ''
      this.$store.dispatch('passContact', this.newContact)
      this.newContact = {}
    },
    deleteContact() {
      this.deleteLink = event.target.id
      this.$store.dispatch('passDeleteLink', this.deleteLink)
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

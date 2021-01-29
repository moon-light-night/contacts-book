<template>
  <div>
    <ul>
      <li v-for="(person, index) in RETURN_PERSON" :key="index">
        {{ `${person[0]} - ${person[1]}` }}
      </li>
      <a @click="$router.push({ name: 'Home' })">to main</a>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters(['RETURN_PERSON']),
}
</script>

<style lang="scss" scoped>
li {
  list-style-type: none;
}
</style>

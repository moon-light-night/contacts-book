<template>
  <div>
    <ul>
      <li>{{ returnPerson.id }}</li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters(['returnPerson']),
}
</script>

<template>
  <div>
    <h3>Hello, here's contacts-book</h3>
    <a @click="$router.push({ name: 'Contacts' })">Show</a>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss" scoped>
a {
  text-decoration: none;
  cursor: pointer;
}
</style>

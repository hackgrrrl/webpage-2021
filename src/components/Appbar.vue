<template lang="pug">
v-container
  v-app-bar
    v-img.shrink.mr-2(src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKZOiUFIa5WBTcmlNeUzEXCr6AW9m0HBzIAQ&usqp=CAU' transition='scale-transition' width='40')
    v-tabs(centered)
      v-tab o que é
      v-tab edições anteriores
      v-tab quem faz
      v-tab edição 2021
      v-tab fale conosco
</template>

<script>
  export default {
    name: 'Appbar',

    data: () => ({
      //
    }),
  }
</script>

<style lang="sass" scoped>

</style>
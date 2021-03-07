<template lang="pug">
div
  v-app-bar(v-if='!isMobile' color='#101111' dark fixed)
    v-img.mr-2(src='../assets/icon_pc.svg' transition='scale-transition' width='40')
    // TODO: text in v-tab to lowercase
    // TODO: put  'fale conosto' on the right
    v-tabs(centered)
      v-tab o que é
      v-tab edições anteriores
      v-tab quem faz
      v-tab edição 2021
      v-tab fale conosco
  v-app-bar(v-else app color='#101111' dark)
    v-app-bar-nav-icon(@click.stop="drawer = !drawer")
    v-navigation-drawer(
      v-model='drawer'
      app
      color='#101111'
      absolute
      temporary
    )
      v-list(nav dense)
        v-list-item
          v-list-item-title
            | o que é
        v-list-item
          v-list-item-title
            | edições anteriores
        v-list-item
          v-list-item-title
            | quem faz
        v-list-item
          v-list-item-title
            | edição 2021
        v-list-item
          v-list-item-title
            | fale conosco
</template>

<script>
  export default {
    name: 'Appbar',

    data: () => ({
      drawer: false
    }),

    computed: {
      isMobile() {
        return this.$vuetify.breakpoint.xsOnly
      }
    }
  }
</script>

<style lang="sass" scoped>

</style>
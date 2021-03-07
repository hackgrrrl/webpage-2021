<template lang="pug">
div
  v-app-bar(v-if='!isMobile' color='#101111' dark app)
    v-img.mr-2(src='../assets/icon_pc.svg' transition='scale-transition' width='40')
    // TODO: text in v-tab to lowercase
    // TODO: put  'fale conosto' on the right
    v-tabs(centered)
      v-tab(@click='scrollMeTo("#about")') o que é
      v-tab(@click='scrollMeTo("#previous-events")') edições anteriores
      v-tab(@click='scrollMeTo("#members")') quem faz
      v-tab(@click='scrollMeTo("#current-edtion")') edição 2021
      v-tab(@click='scrollMeTo("#contact-us")') fale conosco
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
        v-list-item(@click='scrollMeTo("#about")')
          v-list-item-title
            | o que é
        v-list-item(@click='scrollMeTo("#previous-events")')
          v-list-item-title
            | edições anteriores
        v-list-item(@click='scrollMeTo("#members")')
          v-list-item-title
            | quem faz
        v-list-item(@click='scrollMeTo("#current-edtion")')
          v-list-item-title
            | edição 2021
        v-list-item(@click='scrollMeTo("#contact-us")')
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
    },

    methods: {
      scrollMeTo(tab) {
        this.$scrollTo(tab, 500, { easing: 'ease-in-out', offset: -100 })
      }
    }
  }
</script>

<style lang="sass" scoped>

</style>
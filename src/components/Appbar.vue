<template lang="pug">
div
  v-app-bar.d-none-d-md-block( color='#000' dark app dense)
    v-tabs.ml-16(centered dark)
      v-tab(@click='scrollMeTo("#about")') quem somos
      v-tab(@click='scrollMeTo("#timeline-event")') cronograma
      v-tab(@click='scrollMeTo("#faq")') faq
      v-tab(@click='scrollMeTo("#sponsors")') apoio
    v-spacer
    v-btn(href='https://www.instagram.com/hackgrrrl/' target="_blank" small min-width="25px" color="white")
      v-icon(small color="black")
        | mdi-instagram
    v-btn.ml-2(href='https://www.facebook.com/hackgrrrl' target="_blank" small min-width="25px" color="white")
      v-icon(small color="black")
        | mdi-facebook
    v-btn.ml-2(href='https://www.linkedin.com/company/hack-grrrl/' target="_blank" small min-width="25px" color="white")
      v-icon(small color="black")
        | mdi-linkedin
    v-btn.ml-2(href='https://www.youtube.com/channel/UCAq130toesQL_rYWjeHGA-w' target="_blank" small min-width="25px" color="white")
      v-icon(small color="black")
        | mdi-youtube
  v-app-bar.d-block.d-md-none(app color='#000' dark)
    v-app-bar-nav-icon(@click.stop="drawer = !drawer")
    v-navigation-drawer(
      v-model='drawer'
      app
      color='#000'
      absolute
      temporary
    )
      v-list(nav dense)
        v-list-item(@click='scrollMeTo("#about")')
          v-list-item-title
            | quem somos
        v-list-item(@click='scrollMeTo("#timeline-event")')
          v-list-item-title
            | cronograma
        v-list-item(@click='scrollMeTo("#faq")')
          v-list-item-title
            | faq
        v-list-item(@click='scrollMeTo("#sponsors")')
          v-list-item-title
            | apoio
</template>

<script>
  export default {
    name: 'AppBar',

    data: () => ({
      drawer: false
    }),
    methods: {
      scrollMeTo(tab) {
        this.$scrollTo(tab, 500, { easing: 'ease-in-out', offset: -100 })
      }
    }
  }
</script>

<style lang="sass" scoped>

</style>
<template  lang="pug">
  v-app
    AppBar
    v-main
      v-row
        HomePage
      v-row
        AboutUs
      v-row
        PreviousEvents
      v-row
        Members
      v-row
        CurrentEdition
      v-row
        ContactUs
      v-row
        SponsorsYear
      v-row
        BottomMenu
</template>

<script>
import AppBar from '@/components/AppBar';
import HomePage from '@/components/HomePage'
import AboutUs from '@/components/AboutUs'
import PreviousEvents from '@/components/PreviousEvents'
import Members from '@/components/Members'
import CurrentEdition from '@/components/CurrentEdition'
import ContactUs from '@/components/ContactUs'
import BottomMenu from '@/components/BottomMenu'
import SponsorsYear from '@/components/SponsorsYear'

export default {
  name: 'App',

  components: {
    AppBar,
    HomePage,
    AboutUs,
    PreviousEvents,
    Members,
    CurrentEdition,
    ContactUs,
    SponsorsYear,
    BottomMenu
  },
  
  data: () => ({
    //
  }),
};
</script>
<style  lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap')

#app
  widht: 100%
  font-family: 'Montserrat', sans-serif
</style>
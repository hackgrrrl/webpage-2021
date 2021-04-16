<template  lang="pug">
  v-app
    Appbar
    v-main
      v-row
        Home
      v-row
        About
      v-row
        PreviousEvents
      v-row
        Members
      v-row
        CurrentEdition
      v-row
        ContactUs
      v-row
        Sponsors
      v-row
        Footer
</template>

<script>
import Appbar from '@/components/Appbar';
import Home from '@/components/Home'
import About from '@/components/About'
import PreviousEvents from '@/components/PreviousEvents'
import Members from '@/components/Members'
import CurrentEdition from '@/components/CurrentEdition'
import ContactUs from '@/components/ContactUs'
import Footer from '@/components/Footer'
import Sponsors from '@/components/Sponsors'

export default {
  name: 'App',

  components: {
    Appbar,
    Home,
    About,
    PreviousEvents,
    Members,
    CurrentEdition,
    ContactUs,
    Sponsors,
    Footer
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
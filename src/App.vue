<template  lang="pug">
  v-app
    AppBar
    v-main
      HomePage
      AboutUs
      TimelineEvent
      Faq
      Newsletter
      //- v-row
      //-   ContactUs
      SponsorsYear
      BottomMenu
</template>

<script>
import AppBar from '@/components/Appbar';
import HomePage from '@/components/HomePage'
import AboutUs from '@/components/AboutUs'
import TimelineEvent from '@/components/TimelineEvent'
import Faq from '@/components/Faq'
import Newsletter from '@/components/Newsletter'
// import ContactUs from '@/components/ContactUs'
import BottomMenu from '@/components/BottomMenu'
import SponsorsYear from '@/components/SponsorsYear'

export default {
  name: 'App',

  components: {
    AppBar,
    HomePage,
    AboutUs,
    TimelineEvent,
    Faq,
    Newsletter,
    // ContactUs,
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
.v-application 
  [class*="text-"]
    font-family: 'Montserrat', sans-serif !important
  font-family: 'Montserrat', sans-serif !important
html, body
  overflow-x: hidden
#app
  width: 100%
  font-family: 'Montserrat', sans-serif !important
</style>
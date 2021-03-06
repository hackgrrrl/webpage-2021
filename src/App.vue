<template  lang="pug">
  v-app
    Appbar
    v-main
      Home
      About
      PreviousEvents
      Members
      CurrentEdition
      ContactUs
</template>

<script>
import Appbar from '@/components/Appbar';
import Home from '@/components/Home'
import About from '@/components/About'
import PreviousEvents from '@/components/PreviousEvents'
import Members from '@/components/Members'
import CurrentEdition from '@/components/CurrentEdition'
import ContactUs from '@/components/ContactUs'


export default {
  name: 'App',

  components: {
    Appbar,
    Home,
    About,
    PreviousEvents,
    Members,
    CurrentEdition,
    ContactUs
  },
  
  data: () => ({
    //
  }),
};
</script>
<style  lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap')

#app
  font-family: 'Montserrat', sans-serif
</style>
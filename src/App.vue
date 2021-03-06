<template  lang="pug">
  v-app
    Appbar
    v-main
      Home
      About
      PreviousEvents
      Members
</template>

<script>
import Appbar from '@/components/Appbar';
import Home from '@/components/Home'
import About from '@/components/About'
import PreviousEvents from '@/components/PreviousEvents'
import Members from '@/components/Members'

export default {
  name: 'App',

  components: {
    Appbar,
    Home,
    About,
    PreviousEvents,
    Members
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
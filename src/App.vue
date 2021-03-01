<template  lang="pug">
  v-app
    Appbar
    v-main
      Home
      About
      PreviousEvents
</template>

<script>
import Appbar from '@/components/Appbar';
import Home from '@/components/Home'
import About from '@/components/About'
import PreviousEvents from '@/components/PreviousEvents'

export default {
  name: 'App',

  components: {
    Appbar,
    Home,
    About,
    PreviousEvents
  },
  
  data: () => ({
    //
  }),
};
</script>

<style  lang="sass" scoped></style>
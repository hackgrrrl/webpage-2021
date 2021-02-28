<template  lang="pug">
  v-app
    Appbar
    v-main
      Home
      About
</template>

<script>
import Appbar from '@/components/Appbar';
import Home from '@/components/Home'
import About from '@/components/About'

export default {
  name: 'App',

  components: {
    Appbar,
    Home,
    About
  },
  
  data: () => ({
    //
  }),
};
</script>

<style  lang="sass" scoped></style>
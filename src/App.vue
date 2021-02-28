<template  lang="pug">
  v-app
    Appbar
    v-main
      Home
</template>

<script>
import Appbar from '@/components/Appbar';
import Home from '@/components/Home'

export default {
  name: 'App',

  components: {
    Appbar,
    Home
  },
  
  data: () => ({
    //
  }),
};
</script>

<style  lang="sass" scoped></style>
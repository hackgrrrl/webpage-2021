<template lang="pug">
div.about
  v-row(align="center")
    v-col(cols='3' v-if='!isMobile')
      v-img.wave-img(src="../assets/pt2_1.png")
    v-col(style='text-align: center;')
      v-img.xs-wave-img(v-if='isMobile' src='../assets/pt2_1.png')
      h1.topic o que é o Hack GRRRL?
      p 
        | Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        | Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        | when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      v-img.xs-ball-img(v-if='isMobile' src='../assets/pt2_2.png')
      h1.topic nossa missão
      p 
        | Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        | Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        | when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    v-col(cols='3' v-if='!isMobile')
      v-img.ball-img(src="../assets/pt2_2.png")
</template>

<script>
  export default {
    name: 'About',

    data: () => ({
      //
    }),
    computed: {
      isMobile() {
        return this.$vuetify.breakpoint.xsOnly
      }
    }
  }
</script>
<style lang="sass" scoped> 
.topic
  margin-top: 2vw
  color: #101111
.wave-img
  position: relative
  width: 42%
  height: auto
  top: 1vw
  left: 18.9%
.ball-img
  position: relative
  width: 25%
  height: auto
  top: 10vh
  left: 6.1vw
p
  margin-top: 1vw
  color: #707070
.xs-wave-img
  position: relative
  width: 10%
  height: auto
  top: 3vh
  left: 5vw
.xs-ball-img
  position: relative
  width: 7%
  height: auto
  top: 5vh
  left: 92vw
</style>
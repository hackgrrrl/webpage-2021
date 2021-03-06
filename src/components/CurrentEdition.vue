<template lang="pug">
div.home
  v-img.ball-image(src='../assets/pt1_1.png')
  v-img.triangle-image(src='../assets/pt1_2.png')
  v-img.logo(src='../assets/titulo.png')
  v-img.wave-image(src='../assets/pt1_3.png')
  v-img.hill-image(src='../assets/pt1_4.png')
</template>

<script>
  export default {
    name: 'CurrentEdtion',

    data: () => ({
      //
    }),
  }
</script>
<style lang="sass" scoped>

.ball-image
  position: absolute
  width: 8.7%
  height: auto
  top: 5.9vw
  left: 4.98%
.triangle-image
  position: absolute
  width: 7.9%
  height: auto
  left: 12.59%
  top: 26.3vw
.logo
  position: absolute
  width: 45%
  height: auto
  left: 27.37%
  top: 8.61vw
.wave-image
  position: absolute
  width: 14.6%
  height: auto
  left: 73.94%
  top: 5.6vw
.hill-image
  position: absolute
  width: 22.6%
  height: auto
  right: 0%
  top: 18.2vw
.home
  width: 100%
  position: relative
  height: 38.4vw
  background-color: #101111
</style>
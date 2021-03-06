<template lang="pug">
div.current-edtion
  v-row(align="center" justify="center")
    v-col
      v-img.ball-image(src='../assets/pt1_1.png')
      v-img.triangle-image(src='../assets/pt1_2.png')
    v-col
      h2.text edição 2020
      h1.text informações em breve!!
      v-spacer
      p.text Quer receber as novidades em primeira mão? Assine nossa newsletter!
      v-row
        v-col

        v-col
          v-btn(depressed color="#FF99CC") Enviar
    v-col
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
.current-edtion
  width: 100%
  position: relative
  height: 38.4vw
  background-color: #101111
.text
  color: #FFFFFF
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

</style>
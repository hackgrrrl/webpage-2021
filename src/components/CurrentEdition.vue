<template lang="pug">
div.current-edtion
  v-row(align="center" justify="center")
    v-col(v-if='!isMobile' cols='2')
      v-img.hill-img(src='../assets/pt5_1.png')
    v-col.text
      v-img.xs-hill-img(v-if='isMobile' src='../assets/pt5_1.png')
      h2.edition edição 2020
      h1.informations informações em breve!!
      v-spacer
      p Quer receber as novidades em primeira mão? Assine nossa newsletter!
      v-row(align="center" justify="center")
        v-col(:cols='isMobile ? 7 : 5')
          v-text-field.white-border(value='hackgrrrl@email.com' solo flat hide-details disabled background-color='#101111' dark)
        v-col(:cols='isMobile ? 3 : 1')
          v-btn(depressed color="#FF99CC" style='margin: 0') Enviar
    v-col(v-if='!isMobile' cols='2')
      v-img.wave-img(src='../assets/pt5_2.png')
</template>

<script>
  export default {
    name: 'CurrentEdtion',

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
.current-edtion
  position: relative
  background-color: #101111
.edition
  font-size: 2rem
.informations
  margin: 5vh
  font-size: 2.5rem
.text
  margin-top: 2vw
  margin-bottom: 1vw
  text-align: center
  color: #FFFFFF
.hill-img
  position: absolute
  width: 15%
  height: auto
  left: 0
  top: 0
.wave-img
  position: absolute
  width: 8%
  height: auto
  right: 0%
  top: 10vh
.xs-hill-img
  position: absolute
  width: 15%
  height: auto
  left: 0
  top: 0
.white-border
  border: 3px solid #FFF
</style>
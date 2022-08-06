<template lang="pug">
v-container.ma-0#about(fluid ref='about')
  v-row(align="center")
    v-col(v-if='!isMobile' cols='3')
      v-img.wave-img(src="../assets/pt2_1.png")
    v-col(style='text-align: center;' cols='12' sm='6')
      v-img.xs-wave-img(v-if='isMobile' src='../assets/pt2_1.png')
      h1.topic o que é o Hack GRRRL?
      p 
        | A Hack Grrrl é uma hackathon de maioria feminina, evento para desenvolvimento de aplicações
        | com duração entre 24 a 48 horas, que busca reunir equipes multidisciplinares para resolver um problema
        | de acordo com o tema apresentado. Fundada 2019 em Recife-PE, sua primeira edição contou com 26 participantes
        | de forma presencial para criação de soluções em Igualdade de Gênero.
        | Neste ano será realizada sua primeira versão online, esperamos contar com sua presença!
      v-img.xs-ball-img(v-if='isMobile' src='../assets/pt2_2.png')
      h1.topic nossa missão
      p 
        | A missão da Hack Grrrl é tornar o ambiente de hackathons e STEM (Ciência, Tecnologia, Engenharia e Matemática) 
        | mais acolhedor para mulheres e grupos historicamente não representados.
    v-col(v-if='!isMobile' cols='3')
      v-img.ball-img(src="../assets/pt2_2.png")
</template>

<script>
  export default {
    name: 'AboutUs',

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
#about
  padding-top: 2vw
.topic
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
<template lang="pug">
v-container.ma-0#about(fluid ref='about')
  v-row(justify="center")
    v-col.d-none.d-md-block(cols=1 align-self="center")
      v-img.ml-n8.smile(src="@/assets/smile.png" :aspect-ratio="1" width="8.5vw")
    v-col(style='text-align: center;' cols=12 md=5)
      div.text-h5.font-weight-bold(style="color: #FFF") o que é o Hack GRRRL?
      center
        p(style="width: 90%; color: #FFF; text-align: center;")
          | A Hack Grrrl é uma hackathon de maioria feminina, evento para desenvolvimento de aplicações
          | com duração entre 24 a 48 horas, que busca reunir equipes multidisciplinares para resolver um problema
          | de acordo com o tema apresentado. Fundada 2019 em Recife-PE, sua primeira edição contou com 26 participantes
          | de forma presencial para criação de soluções em Igualdade de Gênero.
      v-row.mx-auto
        v-col(cols="auto")
          v-img.hidden-md-and-up.ml-n4.smile(src="@/assets/smile.png" aspect-ratio="1" width="13vw")
        v-col(cols="12")
          div.text-h5.font-weight-bold.mx-auto.mt-n8.mt-md-auto(style="color: #FFF") nossa missão
      center
        p(style="width: 90%; color: #FFF;")
          | A missão da Hack Grrrl é tornar o ambiente de hackathons e STEM (Ciência, Tecnologia, Engenharia e Matemática) 
          | mais acolhedor para mulheres e grupos historicamente não representados.
    v-col.d-none.d-md-block(cols=1)
      v-img.star(src="@/assets/star.png" :aspect-ratio="1" width="6.5vw")
    v-col(style='text-align: center;' cols=12 md=4)
      v-row.d-md-none(justify="end")
        v-col.pb-0(cols="auto")
          v-img.mt-n9.bee(src="@/assets/bee.png" :aspect-ratio="1" width="9.5vw")
      v-row.mx-auto.mt-md-0
        v-col.px-0.pt-0
          div.text-h5.font-weight-bold(style="color: #FFF") quem faz o Hack GRRRL?
      v-row.mt-6
        v-col.my-0.py-0(cols=6 lg=4 v-for="{pic, name} in members" :key="name")
          v-img.mx-auto(:src="pic" aspect-ratio="1" max-width="160")
          p.subtitle-1.white--text {{name}}
    v-col.d-none.d-md-block(cols=1 align-self="center")
      v-img.mr-n15.bee(src="@/assets/bee.png" :aspect-ratio="1" max-width="8.5vw")
</template>

<script>
  export default {
    name: 'AboutUs',

    data: () => ({
      members: [
        { pic: require('@/assets/members/lav.png'), name: 'Lavínia'},
        { pic: require('@/assets/members/nat.png'), name: 'Nathalia'},
        { pic: require('@/assets/members/bea.png'), name: 'Beatriz'},
        { pic: require('@/assets/members/eneri.png'), name: 'Eneri'},
        { pic: require('@/assets/members/may.jpg'), name: 'Mayara'},
        { pic: require('@/assets/members/viv.jpg'), name: 'Viviane'}
      ]
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
  background-color: #000
  padding-top: 2vw
.star
  transform: rotate(20deg)
.smile
  transform: rotate(350deg)
.bee
  transform: rotate(10deg)
p
  margin-top: 1vw
  color: #707070
.xs-wave-img
  position: relative
  width: 10%
  height: auto
  top: 3vh
  left: 5vw

</style>
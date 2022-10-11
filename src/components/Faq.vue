<template lang="pug">
v-container.ma-0#faq(fluid)
  v-row(align="center" justify="center" dense no-gutters)
    v-col.d-none.d-md-block.mr-md-14.mr-lg-5(style="position: relative")
      v-img.watermelon(src="@/assets/watermelon.png" max-width="4rem")
    v-col.ml-md-4.ml-lg-0(cols="12")
      div.text-h5.text-md-h4.font-weight-bold.mt-md-n10.text-center faq
  v-row.px-md-6.ma-md-7
    v-expansion-panels(focusable dark flat style="background-color: black !important")
      v-expansion-panel(v-for="item in items" :key="item.id")
        v-expansion-panel-header(style="background-color: black") {{item.name}}
        v-expansion-panel-content(style="background-color: black") {{item.children}}
</template>

<script>
export default {
  name: 'Faq',

  data: () => ({
    items: [
      {
      id: 1,
      name: 'Pessoas fora de computação podem participar?',
      children: 'Sim, queremos diversidade nos times. Pessoas de Design, Administração e outras áreas serão muito bem-vindas.'
      },
      {
      id: 2,
      name: 'Qual o nível de experiência necessário?',
      children: 'Pessoas de todos os níveis de experiência serão chamadas - desde que sejam maiores de 18 anos, estejam no ensino superior ou se formaram em 2022.'
      },
      {
      id: 3,
      name: 'Homens podem participar?',
      children: 'Claro, encorajar as mulheres na área de TI é bastante importante e para isso, deve haver diálogo da parte deles também. Porém, a prioridade vão ser as Minas.'
      },
      {
      id: 4,
      name: 'Qual será o tema?',
      children: 'O tema do hackathon será divulgado no dia do evento.' 
      },
      {
      id: 5,
      name: 'É preciso já ter um time formado para participar?',
      children: 'Resposta'
      },
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
#faq
  width: 100%
  background-color: #000
  color: #FFF
.watermelon
  postion: absolute
  left: 43%
  margin-bottom: 0
  transform: rotate(340deg)
</style>
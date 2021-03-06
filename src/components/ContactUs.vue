<template lang="pug">
div.about
  v-row(align="center")
    v-col(cols='3' v-if='!isMobile')
      v-img.wave-img(src="../assets/pt2_1.png")
    v-col(style='text-align: center;')
      h1 fale conosco!
      p Tem alguma dúvida? Gostaria de nos patrocinar? Deixe aqui suas informações para entrarmos em contato assim que possível!
      v-row
        v-col
          v-text-field(v-model="form.name" label="Nome" outlined color="#6FDDD5")
        v-col
          v-text-field(v-model="form.email" label="Email" outlined color="#6FDDD5")
        v-col
          v-text-field(v-model="form.phone" label="Telefone (opcional)" outlined color="#6FDDD5")
      v-row
        v-textarea(v-model="form.description" label="Digite sua mensagem aqui..." outlined auto-grow rows="4" )
      v-row
        v-btn(depressed color="#FF99CC") Enviar
    v-col(cols='3' v-if='!isMobile')
      v-img.ball-img(src="../assets/pt2_2.png")
</template>

<script>
  export default {
    name: 'About',

    data: () => ({
      form:{
        name: '',
        email: '',
        phone: '',
        description:''
      }
    }),
    computed: {
      isMobile() {
        return this.$vuetify.breakpoint.xsOnly
      }
    }
  }
</script>
<style lang="sass" scoped>
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
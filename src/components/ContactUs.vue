<template lang="pug">
div.contact-us
  v-row(align="center")
    v-col(cols='2' v-if='!isMobile')
      v-img.triangle-img(src="../assets/pt6_1.png")
    v-col(style='text-align: center;')
      h1 fale conosco!
      p Tem alguma dúvida? Gostaria de nos patrocinar? Deixe aqui suas informações para entrarmos em contato assim que possível!
      v-row
        v-col
          v-text-field.blue-border(v-model="form.name" label="Nome" solo flat hide-details color="#6FDDD5")
        v-col
          v-text-field.blue-border(v-model="form.email" label="Email" solo flat hide-details color="#6FDDD5")
        v-col
          v-text-field.blue-border(v-model="form.phone" label="Telefone (opcional)" solo flat hide-details color="#6FDDD5")
      v-row
        v-col(cols='12')
          v-textarea.blue-border(v-model="form.description" label="Digite sua mensagem aqui..." solo flat auto-grow rows="4")
      v-row.pink-btn(justify='center')
        v-btn(depressed color="#FF99CC") Enviar
    v-col(cols='2' v-if='!isMobile')
      v-img.wave-img(src="../assets/pt6_2.png")
</template>

<script>
  export default {
    name: 'ContactUs',

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
.contact-us
  position: relative
  margin-top: 2vw
  margin-bottom: 1vw
.triangle-img
  position: absolute
  width: 4.5%
  height: auto
  top: 1vw
  left: 92%
.wave-img
  position: absolute
  width: 6%
  height: auto
  top: 38vh
  left: 12%
.blue-border
  border: 3px solid #6FDDD5
.pink-btn
  margin-top: 3.5vh
</style>
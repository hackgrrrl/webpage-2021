<template lang="pug">
v-container#current-edtion(fluid)
  v-row(align="center" justify="center")
    v-col(v-if='!isMobile' sm='2')
      v-img.hill-img(src='../assets/pt5_1.png')
    v-col.text(cols='12' sm='8')
      v-img.xs-hill-img(v-if='isMobile' src='../assets/pt5_1.png')
      h2.edition edição 2021
      h3.informations de 30 de março a 2 de abril
      v-spacer
      v-btn.apply-btn(depressed href="http://bit.ly/inscricaoHackGrrrlParticipante" color="#A9B5E8"  type='link' name='mentoras') inscrições para  !{'  '}   #[strong  participantes] 
      v-spacer
      v-btn.apply-btn(depressed color="#66CCFF" href="http://bit.ly/inscricaoHackGrrrlMentoras" type='link' name='mentoras') inscrições para!{'      '}  #[strong  mentoras] 
      v-spacer
      p.newsletter Quer receber as novidades em primeira mão? Assine nossa newsletter!
      div#mc_embed_signup
        form.validate#mc-embedded-subscribe-form(
          action='https://gmail.us20.list-manage.com/subscribe/post?u=ab3ae93ebf89a83bd05d0b17d&amp;id=ce2d825da7'
          method='post'
          name='mc-embedded-subscribe-form'
          target='_blank'
          novalidate
        )
          v-row(align="center" justify="center")
            v-col(cols='12' sm='7')
              v-text-field.white-border.email#mce-EMAIL(name='EMAIL' label='exemplo@email.com' solo flat hide-details background-color='#101111' dark)
            v-col(cols='3' sm='1')
              v-btn(depressed color="#FF99CC" style='margin: 0' type='submit' name='subscribe') Enviar
    v-col(v-if='!isMobile' sn='2')
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
#mc_embed_signup
  clear: left 
  width: 100%
#current-edtion
  width: 100%
  position: relative
  background-color: #101111
.edition
  font-size: 2rem
.informations
  margin: 1vh
  font-size: 1.5rem
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
.apply-btn
  margin: 0.75vw
  font-size: 1rem
  text-transform: lowercase
.newsletter
  margin-top: 0.75vw
</style>
<template lang="pug">
v-container#current-edtion(fluid)
  v-row(align="center", justify="center")
    v-col(v-if="!isMobile", sm="2")
      v-img.hill-img(src="../assets/pt5_1.png")
    v-col.text(cols="12", sm="8")
      v-img.xs-hill-img(v-if="isMobile", src="../assets/pt5_1.png")
      h1.edition edição 2021
      h2.informations de 30 de abril a 2 de maio - inscrições encerradas
      v-spacer
      h2.topic cronograma do evento
      v-row.px-6.ma-0(justify="center")
        v-col
          v-icon(:size="isMobile ? 100 : 200", dark)
            | mdi-flag
          span
            h3.informations Live de abertura
            p 30 de abril - 19:30
        v-col
          v-icon(:size="isMobile ? 100 : 200", dark)
            | mdi-play-box-outline
          span
            h3.informations Pré-pitch
            p 01 de maio - 20:00
        v-col
          v-icon(:size="isMobile ? 100 : 200", dark)
            | mdi-dice-4
          span
            h3.informations Fun night!
            p 01 de maio - 22:00
        v-col
          v-icon(:size="isMobile ? 100 : 200", dark)
            | mdi-flag-checkered
          span
            h3.informations Encerramento do evento
            p 02 de maio - 20:00
      v-spacer
      h2.topic palestrantes confirmados
      v-row.px-6.ma-0(justify="center")
        v-col
          v-avatar(:size="isMobile ? 100 : 200")
            img(src="../assets/talks/thiago.jpg")
          span
            h3.informations Thiago Augusto
            v-btn(
              href="https://www.linkedin.com/in/thiagoaugustosm",
              target="#",
              icon,
              dark
            )
              v-icon(dark)
                | mdi-linkedin
            v-btn(href="https://github.com/ThiagoAugustosm", icon, target='#', dark)
              v-icon(dark)
                | mdi-github
        v-col
          v-avatar(:size="isMobile ? 100 : 200")
            img(src="../assets/talks/luiz.jpg")
          span
            h3.informations Luiz Leão
            v-btn(href="http://www.linkedin.com/in/luisleao", target="#", icon,dark)
              v-icon(dark)
                | mdi-linkedin
            v-btn(href="https://github.com/luisleao", target="#", icon, dark)
              v-icon(dark)
                | mdi-github
            v-btn(href="https://twitter.com/luisleao", target="#", icon, dark)
              v-icon(dark)
                | mdi-twitter
            v-btn(href="https://facebook.com/luisleao", target="#", icon, dark)
              v-icon(dark)
                | mdi-facebook
        v-col
          v-avatar(:size="isMobile ? 100 : 200")
            img(src="../assets/talks/ingrid.jpg")
          span
            h3.informations Ingrid Pacheco
            v-btn(
              href="https://www.linkedin.com/in/ingridqpacheco/",
              target="#",
              icon,
              dark
            )
              v-icon(dark)
                | mdi-linkedin
      v-spacer
      p.newsletter Quer receber as novidades em primeira mão? Assine nossa newsletter!
      #mc_embed_signup
        form#mc-embedded-subscribe-form.validate(
          action="https://gmail.us20.list-manage.com/subscribe/post?u=ab3ae93ebf89a83bd05d0b17d&amp;id=ce2d825da7",
          method="post",
          name="mc-embedded-subscribe-form",
          target="_blank",
          novalidate
        )
          v-row(align="center", justify="center")
            v-col(cols="12", sm="7")
              v-text-field#mce-EMAIL.white-border.email(
                name="EMAIL",
                label="exemplo@email.com",
                solo,
                flat,
                hide-details,
                background-color="#101111",
                dark
              )
            v-col(cols="3", sm="1")
              v-btn(
                depressed,
                color="#FF99CC",
                style="margin: 0",
                type="submit",
                name="subscribe"
              ) Enviar
    v-col(v-if="!isMobile", sn="2")
      v-img.wave-img(src="../assets/pt5_2.png")
</template>

<script>
export default {
  name: "CurrentEdtion",

  data: () => ({
    //
  }),

  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.xsOnly;
    },
  },
};
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
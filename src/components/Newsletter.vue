<template lang="pug">
v-container.ma-0#news-letter(fluid)
  v-row
    v-col.ml-md-16.mt-4.mx-auto(md="8" cols="11")
      div.text-md-6.font-weight-bold Cadastre-se na nossa newsletter:
      #mc_embed_signup
        form#mc-embedded-subscribe-form.validate(
          action="https://gmail.us20.list-manage.com/subscribe/post?u=ab3ae93ebf89a83bd05d0b17d&amp;id=ce2d825da7",
          method="post",
          name="mc-embedded-subscribe-form",
          target="_blank",
          novalidate
        )
          v-container(row)
            v-text-field#mce-NOME(
              name="NOME",
              label="seu nome social",
              solo,
              flat,
              hide-details,
              style="border-bottom: 3px solid black !important; border-radius: 0"
            )
            v-container(row)
              v-text-field#mce-EMAIL(
                name="EMAIL",
                label="seu email, ex: exemplo@email.com",
                solo,
                flat,
                hide-details,
                style="border-bottom: 3px solid black !important; border-radius: 0"
              )
            p(style="font-size: 0.85em") Ao inserir o seu email, você concorda com o nosso LGPD.
            v-container.d-flex.justify-center.justify-md-start(row)
              v-btn#button(
                color="#F0D12D"
                tile
                type="submit"
                name="subscribe"
                ) Enviar
      br
      div.text-md-6.font-weight-bold Ou acompanhe nossas redes sociais:
      br
      v-btn.mr-3(href='https://www.instagram.com/hackgrrrl/' target="_blank" small min-width="25px" color="black")
          v-icon(small color="white")
            | mdi-instagram
      v-btn.mr-3(href='https://www.facebook.com/hackgrrrl' target="_blank" small min-width="25px" color="black")
          v-icon(small color="white")
            | mdi-facebook
      v-btn.mr-3(href='https://www.linkedin.com/company/hack-grrrl/' target="_blank" small min-width="25px" color="black")
          v-icon(small color="white")
            | mdi-linkedin
      v-btn(href='https://www.youtube.com/channel/UCAq130toesQL_rYWjeHGA-w' target="_blank" small min-width="25px" color="black")
          v-icon(small color="white")
            | mdi-youtube
  v-row.mt-n5.mt-md-n14(justify="end")
    v-img(src='@/assets/color-squares-r.png' :aspect-ratio="298/150" max-width="22%")
</template>

<script>
export default {
  name: "Newsletter",

  data: () => ({
    //
  }),
};
</script>
<style lang="sass" scoped>
#mc_embed_signup
  clear: left
  width: 100%
#news-letter
  width: 100%
  background-color: #FFF
  color: black
#button
  font-weight: bold
  box-shadow: -0.3rem 0.3rem black !important
</style>
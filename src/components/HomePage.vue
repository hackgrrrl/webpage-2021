<template lang="pug">
v-container.ma-0(fluid full-width)
  v-row
    v-img(src='@/assets/color-squares-l.png' :aspect-ratio="298/150" max-width="22%")
  v-row.mt-10.mt-md-n10
    v-col.d-none.d-md-flex.justify-center(md="6" lg="5")
      v-img(src='@/assets/icon_pc_2022.png' :aspect-ratio="398/362" max-width="398px")
    v-col.justify-center.justify-md-start(cols="12" md="6" lg="7")
      v-row.text-md-left.text-center.mx-3.ml-md-16(justify="center")
        v-col(cols="12")
          v-img.mx-auto.mx-md-0(src='@/assets/Logo Minimal.png' :aspect-ratio="426/184" max-width="426px")
        v-col(cols="12")
          div.text-h5.text-md-h4.font-weight-bold.mt-7(style="color: #000;") 09 a 11 dezembro de 2022
        v-row.mt-12.ml-md-n16(style="z-index: 2")
          v-col.mx-auto.mx-md-0(cols="auto")
            v-btn#button(href="https://bit.ly/hackgrrrl2022incricoes" target="_blank" color="#E34876" tile)
              | inscreva-se (participante)!
          v-col.mx-auto.ml-md-4(cols="auto")
            v-btn#button(href= " https://bit.ly/hackgrrrl2022mentoras" target="_blank" color="#F0D12D" tile)
              | inscreva-se (mentora)!
  v-row.mt-md-n13(justify="end")
    v-img(src='@/assets/color-squares-r.png' :aspect-ratio="298/150" max-width="22%")
</template>

<script>
  export default {
    name: 'HomePage',

   data: () => ({
      //
    }),
  }
</script>
<style lang="sass" scoped>
@media screen and (min-width: 960px) 
  #button
    text-transform: unset !important
    font-weight: bold
    font-size: 1.05em
    box-shadow: -0.3rem 0.3rem black !important
@media screen and (max-width: 960px)
  #button
    text-transform: unset !important
    font-weight: bold
    font-size: 1em
    box-shadow: -0.3rem 0.3rem black !important
</style>
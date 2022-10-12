<template lang="pug">
v-container.ma-0#sponsors(fluid)
    v-row(justify="center")
        v-col.mt-4.text-center(cols="12")
            div.text-h5.font-weight-bold apoio
        v-col.d-none.d-md-block(style="position: relative")
            v-img.star-img(src="../assets/star.png" :aspect-ratio="1" width="4.5vw")
    v-row.mt-md-n9(justify="center")
        v-img.d-none.d-md-block(src='@/assets/sponsors/sponsors2022.png' max-width="30%")
        v-img.d-block.d-md-none(src='@/assets/sponsors/sponsors2022.png' max-width="60%")
    v-row(justify="center")
        v-btn#button(href="https://forms.gle/Jr83bK4Z5pzCF85RA" target="_blank" color="#E34876" tile)
            | seja um patrocinador!
    v-container.logos
        //- div.text-h6.font-weight-bold nível ouro
        //- div.text-h6.font-weight-bold nível prata
        //- div.text-h6.font-weight-bold apoio
</template>

<script>
export default {
  name: "SponsorsYear",

  data: () => ({}),

  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.xsOnly;
    },
  },
};
</script>

<style lang="sass" scoped>
#sponsors
    width: 100%
    background-color: #000
    padding-bottom: 8vh
    color: #FFFFFF
.topic
    text-align: center
    padding-top: 5vh
.subtopic
    padding-top: 5vh
.star-img
    position: absolute
    top: -6vh
    right: 5%
    transform: rotate(20deg)
.col
    margin: auto
@media screen and (min-width: 960px) 
  #button
    text-transform: unset !important
    font-weight: bold
    font-size: 1.2em
    box-shadow: -0.3rem 0.3rem white !important
@media screen and (max-width: 960px)
  #button
    text-transform: unset !important
    font-weight: bold
    font-size: 1em
    box-shadow: -0.3rem 0.3rem white !important
</style>
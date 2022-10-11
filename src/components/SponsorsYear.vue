<template lang="pug">
v-container.ma-0#sponsors(fluid)
    v-row(justify="center")
        v-col.mt-4.text-center(cols="12")
            div.text-h5.font-weight-bold patrocinadores
        v-col.d-none.d-md-block(style="position: relative")
            v-img.star-img(src="../assets/star.png" :aspect-ratio="1" width="4.5vw")

    v-container.logos
        div.text-h6.font-weight-bold nível ouro
        div.text-h6.font-weight-bold nível prata
        div.text-h6.font-weight-bold apoio
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
</style>
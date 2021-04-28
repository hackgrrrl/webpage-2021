<template lang="pug">
v-container#sponsors.ma-0.pa-0(fluid)
  v-img.circle-img(src="../assets/pt4_1.png")
  v-img.hill-img(src="../assets/pt4_2.png")
  v-container.logos
    h1.topic Patrocínio
    h3.subtopic Ouro
    v-row.px-6.ma-0.gold(justify='center')
        v-col
            center
                v-img(
                        contain,
                        src="../assets/sponsors/globo_white.png",
                        :max-height="isMobile ? 150 : 200",
                        :max-width="isMobile ? 150 : 200"
                )
    h3.subtopic Prata
    v-row.px-6.ma-0.silver(justify='center')
        v-col
            center
                v-img(
                    contain,
                    src="../assets/sponsors/twilio_white.png",
                    :max-height="isMobile ? 150 : 200",
                    :max-width="isMobile ? 150 : 200"
                )
        v-col
            center
                v-img(
                    contain,
                    src="../assets/sponsors/vinta_white.png",
                    :max-height="isMobile ? 150 : 200",
                    :max-width="isMobile ? 150 : 200"
                )
    h3.subtopic Bronze
    v-row.px-6.ma-0.copper(justify='center')
        v-col
            center
                v-img(
                    contain,
                    src="../assets/sponsors/ambev_white.png",
                    :max-height="isMobile ? 150 : 200",
                    :max-width="isMobile ? 150 : 200"
                )
    h1.topic Apoio
    v-row.px-6.ma-0(justify-content="center")
        v-col
            center
                v-img(
                    contain,
                    src="../assets/sponsors/shawee_white.png",
                    :max-height="isMobile ? 150 : 200",
                    :max-width="isMobile ? 150 : 200"
                )
        v-col
            center
                v-img(
                    contain,
                    src="../assets/sponsors/github_white.png",
                    :max-height="isMobile ? 150 : 200",
                    :max-width="isMobile ? 150 : 200"
                )
</template>

<script>
export default {
  name: "Sponsors",

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
    position: relative
    text-align: center
    background-color: #101111
    padding-bottom: 8vh
.logos
    max-width: 70%
.topic
    padding-top: 5vh
    color: #FFFFFF
.subtopic
    padding-top: 5vh
    color: rgb(255, 153, 204)
.circle-img
    position: absolute
    width: 4.5%
    height: auto
    top: 6vh
    left: 8vw
.hill-img
    position: absolute
    width: 12%
    height: auto
    top: 0%
    right: 0vw
.col
    margin: auto
</style>
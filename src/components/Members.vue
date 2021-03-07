<template lang="pug">
v-container.ma-0.pa-0#members(fluid)
    v-img.circle-img(src='../assets/pt4_1.png')
    v-img.hill-img(src='../assets/pt4_2.png')
    h1.topic quem faz
    v-row.px-6.ma-0(justify='center')
        v-col
            v-avatar(:size='isMobile? 100 : 200')
                img(src='../assets/members/bea.jpg')
            span
                h2 Beatriz
                p ?
        v-col
            v-avatar(:size='isMobile? 100 : 200')
                img(src='../assets/members/carol.jpg')
            span
                h2 Carolina
                p ?
        v-col
            v-avatar(:size='isMobile? 100 : 200')
                img(src='../assets/members/lav.jpg')
            span
                h2 Lavínia
                p Co-fundadora
        v-col
            v-avatar(:size='isMobile? 100 : 200')
                img(src='../assets/members/may.jpg')
            span
                h2 Mayara
                p  ?
        v-col
            v-avatar(:size='isMobile? 100 : 200')
                img(src='../assets/members/nat.jpg')
            span
                h2 Nathália
                p Co-fundadora
        v-col
            v-avatar(:size='isMobile? 100 : 200')
                img(src='../assets/members/viv.jpg')
            span
                h2 Viviane
                p UX/UI designer & Ilustradora
</template>

<script>
export default {
    name: 'About',

    data: () => ({
    }),

    computed: {
      isMobile() {
        return this.$vuetify.breakpoint.xsOnly
      }
    }
}
</script>

<style lang="sass" scoped>
#members
    width: 100%
    position: relative
    text-align: center
.topic
    padding-top: 5vh
    padding-bottom: 8vh
    color: #101010
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
</style>
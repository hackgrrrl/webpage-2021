<template lang="pug">
div.previous-events
  v-row
    v-col.pa-0(cols='3' v-if='!isMobile')
      v-img.hill-img(src='../assets/pt3_1.png')
    v-col.pa-0(style='position: relative')
      v-img.xs-hill-img(v-if='isMobile' src='../assets/pt3_1.png')
      h1.topic edições anteriores
      carousel-3d(
        :count="pictures.length"
        :height='isMobile ? 126 : 230'
        :width='isMobile ? 200 : 360'
        border='0'
        display='3'
        )
        slide(v-for='(picture, i) in pictures' :index='i' :key='i')
          template(slot-scope="{ index, isCurrent, leftIndex, rightIndex }")
            v-img(:src='picture' :data-index='index')
        //- slide(v-for='i in 7' :index='i')
        //-   v-img(:src='`../assets/pictures/${i}.jpg`')
    v-col(cols='3' v-if='!isMobile')
      v-img.triangle-img(src='../assets/pt3_2.png')

  //- H1(align="center") https://vuetifyjs.com/en/components/carousels/
</template>

<script>
  import { Carousel3d, Slide } from 'vue-carousel-3d';
  export default {
    name: 'PreviousEvents',

    data: () => ({
      pictures: []
    }),

    components: {
      Carousel3d,
      Slide
    },

    computed: {
      isMobile() {
        return this.$vuetify.breakpoint.xsOnly
      }
    },

    mounted () {
      let context = require.context('../assets/pictures', true, /\.jpg$/)
      context.keys().forEach(key => {
        console.log(key)
        this.pictures.push(context(key))
      });
      console.log(this.pictures)
    }
  }
</script>
<style lang="sass" scoped>
.previous-events
  text-align: center
  background-color: #101111
.hill-img
  position: relative
  width: 70%
  height: auto
  left: 0
  top: 0
.topic
  color: #FFFFFF
  margin-top: 2vw
.triangle-img
  position: relative
  width: 40%
  height: auto
  left: 28%
  top: 20vh
.xs-hill-img
  position: absolute
  width: 13%
  height: auto
  left: 0
  top: 0
</style>
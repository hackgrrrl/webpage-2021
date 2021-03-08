<template lang="pug">
v-container.ma-0#previous-events(fluid)
  v-row
    v-col.pa-0(v-if='!isMobile' lg='3')
      v-img.hill-img(src='../assets/pt3_1.png')
    v-col.pa-0(cols='12' lg='6' style='position: relative')
      v-img.xs-hill-img(v-if='isMobile' src='../assets/pt3_1.png')
      h1.topic edições anteriores
      carousel-3d(
        :count="pictures.length"
        :height='pictureHeight'
        :width='pictureWidth'
        border='0'
        display='3'
        )
        slide(:index='0')
          iframe(:width="pictureWidth" :height="pictureHeight" src="https://www.youtube.com/embed/9EmLlBMHrFQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        slide(:index='1')
          v-img(src='../assets/pictures/1.jpg')
        slide(:index='2')
          v-img(src='../assets/pictures/2.jpg')
        slide(:index='3')
          v-img(src='../assets/pictures/3.jpg')
        slide(:index='4')
          v-img(src='../assets/pictures/4.jpg')
        slide(:index='5')
          v-img(src='../assets/pictures/5.jpg')
        slide(:index='6')
          v-img(src='../assets/pictures/6.jpg')
        slide(:index='7')
          v-img(src='../assets/pictures/7.jpg')
        
    v-col(v-if='!isMobile' lg='3')
      v-img.triangle-img(src='../assets/pt3_2.png')
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
        return this.$vuetify.breakpoint.mdAndDown
      },
      pictureWidth () {
        return Math.max((this.$vuetify.breakpoint.width * 0.35), 300)
      },
      pictureHeight () {
        return (this.pictureWidth * 0.66)
      }
    },

    mounted () {
      let context = require.context('../assets/pictures', true, /\.jpg$/)
      context.keys().forEach(key => {
        console.log(key)
        this.pictures.push(context(key))
      });
    }
  }
</script>
<style lang="sass" scoped>
#previous-events
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
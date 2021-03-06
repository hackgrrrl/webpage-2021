<template lang="pug">
div.members
    v-img.circle-img(src='../assets/pt4_1.png')
    v-img.hill-img(src='../assets/pt4_2.png')
    h1.topic quem faz
    v-row
        v-col(v-for='member in members' :key='member.name')
            v-avatar(size='125')
                v-img(:src='member.picture')

    
</template>

<script>
export default {
    name: 'About',

    data: () => ({
      members: [
          {
              name: 'Beatriz',
              picture: './assets/members/bea.jpg',
              description: 'teste'
          },
          {
              name: 'Lavínia',
              picture: './assets/members/lav.jpg',
              description: 'Co-founder'
          }
      ]
    }),

    mounted () {
      let context = require.context('../assets/members/', false, /\.jpg$/)
      for (let member in this.members) {
          member.url = context(member.picture)
      }
      console.log(this.members)
    }
}
</script>

<style lang="sass" scoped>
.members
    position: relative
    text-align: center
.topic
    padding-top: 5vh
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
    top: 1.7vh
    right: 0vw
</style>
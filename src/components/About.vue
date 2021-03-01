<template lang="pug">
div
  v-row(align="center")
    v-col
      v-img.img(src="https://imagens.canaltech.com.br/celebridades/30.400.jpg")
    v-col( justify="center")
      h3.title o que é o Hack GRRRL?
      p 
        | Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        | Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        | when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      h3.title nossa missão
      p 
        | Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        | Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        | when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    v-col
      v-img.img(src="https://imagens.canaltech.com.br/celebridades/30.400.jpg" )
</template>

<script>
  export default {
    name: 'About',

    data: () => ({
      //
    }),
  }
</script>
<style lang="sass" scoped> 
.title
  color: red
.img
  height: 20rem
</style>
<template lang="pug">
v-container.footer(fluid)
    v-row(justify='center' align='center')
        v-col(cols='auto')
            a(href='https://bit.ly/privacidadeHackGrrrl2021') política de privacidade
        v-col(cols='auto')
            a(href='https://bit.ly/hackgrrrl2022codigo') código de conduta
        v-col(cols='auto')
            a(href='https://bit.ly/editalHackGrrrl2021') edital do evento
</template>

<script>
export default {
    name: 'BottomMenu',

    data: () => ({
    }),

}
</script>

<style lang="sass" scoped>
.footer
    width: 100%
    font-size: 0.75rem
    color: #fff
    background-color: #000
a:link, a:visited
    color: white
    text-decoration: none
</style>
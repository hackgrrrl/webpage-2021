<template lang="pug">
v-container.footer(fluid)
    v-row(justify='center' align='center')
        v-col(cols='auto')
            a(href='https://bit.ly/privacidadeHackGrrrl2021') Política de privacidade
        v-col(cols='auto')
            a(href='https://bit.ly/condutaHackGrrrl2021') Código de conduta
        v-col(cols='auto')
            a(href='https://bit.ly/editalHackGrrrl2021') Edital do Evento
    v-row(justify='center' align='center')
        v-col(cols='auto')
            v-btn(href='https://www.instagram.com/hackgrrrl/' target="#" icon dark)
                v-icon(dark)
                    | mdi-instagram
        v-col(cols='auto')
            v-btn(href='https://www.linkedin.com/company/hack-grrrl/' target="#" icon dark)
                v-icon(dark)
                    | mdi-linkedin
        v-col(cols='auto')
            v-btn(href='https://www.facebook.com/hackgrrrl'  icon dark)
                v-icon(dark)
                    | mdi-facebook
        v-col(cols='auto')
            v-btn(href='https://www.youtube.com/channel/UCAq130toesQL_rYWjeHGA-w'  icon dark)
                v-icon(dark)
                    | mdi-youtube
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
    background-color: #101111
a:link, a:visited
    color: white
    text-decoration: none
</style>
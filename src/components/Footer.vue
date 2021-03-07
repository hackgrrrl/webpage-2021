<template lang="pug">
v-container.footer(fluid)
    v-row(justify='center' align='center')
        v-col(cols='1')
            v-btn(href='https://www.instagram.com/hackgrrrl/' target="#" icon dark)
                v-icon(dark)
                    | mdi-instagram
        v-col(cols='1')
            v-btn(href='https://www.linkedin.com/company/hack-grrrl/' target="#" icon dark)
                v-icon(dark)
                    | mdi-linkedin
        v-col(cols='1')
            v-btn(href='https://www.facebook.com/hackgrrrl'  icon dark)
                v-icon(dark)
                    | mdi-facebook
</template>

<script>
export default {
    name: 'Footer',

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
    margin-top: 2vh
</style>
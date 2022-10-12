<template lang="pug">
v-container.ma-0#timeline-event(fluid)
  v-row(style="position: relative;")
    v-col.d-flex.justify-center.justify-md-end.mt-3.timeline
      v-layout(column)
        div.text-h5.text-md-h4.font-weight-bold(style="color: #000;") cronograma edição 2022
        v-timeline.mt-5
          v-timeline-item(small color="black" class="text-left")
            h2 11 de outubro
            div Abertura das inscrições para mentora e participante
          v-timeline-item(small color="black" class="text-right")
            h2 19 de outubro
            div Call for papers: Hack GRRRL workshop
          v-timeline-item(small color="black" class="text-left")
            h2 6,7,8 de dezembro
            div Workshop
          v-timeline-item(small color="black" class="text-right")
            h2 9 a 11 de dezembro
            div Hackathon
    v-col.d-none.d-md-flex.justify-end.pt-0.pr-0(cols="auto")
      v-img(src='@/assets/color-squares-v.png' :aspect-ratio="210/417" max-width="33%" min-width="13vw")
  v-row.mt-n8.mt-md-n16
    v-img(src='@/assets/color-squares-l.png' :aspect-ratio="417/210" max-width="25%")
</template>

<script>
  export default {
    name: 'TimelineEvent',

    data: () => ({
    }),

  }
</script>
<style lang="sass" scoped>
@media  screen and (min-width: 960px) 
  .timeline
    margin-left: 170px
.v-timeline::before
  border-left: 2px dashed #000
  background-color: white
#timeline-event
  text-align: center
  background-color: #FFF
</style>
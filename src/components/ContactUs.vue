<template lang="pug">
v-container#contact-us(fluid)
  v-row(align="center")
    v-col(sm="2", v-if="!isMobile")
      v-img.triangle-img(src="../assets/pt6_1.png")
    v-col(style="text-align: center", cols="12", sm="8")
      h1 fale conosco!
      p Tem alguma dúvida? Gostaria de nos patrocinar? Deixe aqui suas informações para entrarmos em contato assim que possível!
      v-container
        v-row
          v-col(cols="12", sm="4")
            v-text-field.blue-border(
              v-model="form.name",
              label="Nome",
              solo,
              flat,
              hide-details,
              color="#6FDDD5"
            )
          v-col(cols="12", sm="4")
            v-text-field.blue-border(
              v-model="form.email",
              label="Email",
              solo,
              flat,
              hide-details,
              color="#6FDDD5"
            )
          v-col(cols="12", sm="4")
            v-text-field.blue-border(
              v-model="form.phone",
              label="Telefone (opcional)",
              solo,
              flat,
              hide-details,
              color="#6FDDD5"
            )
          v-col(cols="12")
            v-textarea.blue-border(
              v-model="form.message",
              label="Digite sua mensagem aqui...",
              solo,
              flat,
              auto-grow,
              rows="4"
            )
        v-row.pink-btn(justify="center")
          v-btn(depressed, color="#FF99CC", @click="sendEmail") Enviar
    v-col(sm="2", v-if="!isMobile")
      v-img.wave-img(src="../assets/pt6_2.png")
</template>

<script>
import axios from "axios";

export default {
  name: "ContactUs",
  methods: {
    sendEmail() {
      axios
        .post(
          "https://gefmeauo7d.execute-api.us-east-2.amazonaws.com/prod/contact/",
          this.form,
          {
            "Content-Type": "application/json"
          }
        )
        .then(() => {
          this.$swal({
            icon: "success",
            title: "Email enviado!",
            text: "Iremos retornar em breve seu contato",
          });
        })
        .catch((e) => {
          console.log(e)
          this.$swal({
            icon: "error",
            title: "Oops...",
            text: "Algo deu errado!",
          });
        });
    },
  },
  data: () => ({
    form: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  }),
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.xsOnly;
    },
  },
};
</script>
<style lang="sass" scoped>
#contact-us
  position: relative
  margin-top: 2vw
  margin-bottom: 1vw
  padding-bottom: 4vh
.triangle-img
  position: absolute
  width: 4.5%
  height: auto
  top: 1vw
  left: 92%
.wave-img
  position: absolute
  width: 6%
  height: auto
  top: 20vw
  left: 10%
.blue-border
  border: 3px solid #6FDDD5
.pink-btn
  margin-top: 3.5vh
</style>

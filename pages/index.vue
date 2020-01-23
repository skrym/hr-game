<template>
  <v-layout column justify-center align-center class="login_layout">
    <v-card class="mx-auto my-12" max-width="374">
      <v-img height="250" src="/start.png"></v-img>
      <v-card-title class="justify-center align-center">Введите имя для начала игры</v-card-title>
      <v-divider class="mx-4"></v-divider>
      <v-form ref="form" v-model="valid" lazy-validation class="ma-5 text-center">
        <v-text-field
          v-model="name"
          :counter="24"
          :rules="nameRules"
          label="Имя"
          required
          autofocus
        ></v-text-field>
        <v-btn :disabled="activeBtn" color="success" class="ma-4" @click="startGame">Войти</v-btn>
      </v-form>
    </v-card>
  </v-layout>
</template>

<script>
export default {
  middleware: ["auth"],
  data() {
    return {
      valid: true,
      name: "",
      nameRules: [
        v => !!v || "Данное поле является обязательным",
        v =>
          (v && v.length <= 24 && v.length > 3) ||
          `Имя должно быть от 4х до 24х знаков`
      ]
    }
  },
  methods: {
    startGame() {
      if (this.$refs.form.validate()) {
        this.snackbar = true
        this.$store.dispatch("login", this.name)
      }
    }
  },
  computed: {
    activeBtn() {
      return this.name.length < 4
    }
  },
  mounted() {
    if (this.$store.getters.isLoggedIn) this.$router.push("cabinet")
  }
}
</script>

<style lang="sass" scoped>
.login_layout
  min-height: calc(100vh - 100px)
</style>
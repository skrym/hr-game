<template>
  <v-card class="ma-5 flex-grow-1">
    <v-card-title color="red">Структура компании</v-card-title>
    <v-divider></v-divider>
    <div class="d-flex flex-wrap pa-3 scroll-y">
      <Office v-for="(office, i) of offices" :key="i" :office="office" />
      <Office />
    </div>
  </v-card>
</template>

<script>
import Office from "~/components/office.vue"

export default {
  components: { Office },
  data() {
    return {
      offices: [
        {
          color: "98",
          employee: [
            { name: "Rerer" },
            { name: "WEedsdsd" },
            { name: "WEedsdsd2" }
          ]
        },
        {
          color: "54",
          employee: [
            { name: "Rer33er" },
            { name: "WEe33dsdsd" },
            { name: "WEed33sdsd2" }
          ]
        },
        {
          color: "24",
          employee: [
            { name: "Rer33er" },
            { name: "WEe33dsdsd" },
            { name: "WEed33sdsd2" }
          ]
        },
        {
          color: "14",
          employee: [
            { name: "Rer33er" },
            { name: "WEe33dsdsd" },
            { name: "WEed33sdsd2" }
          ]
        },
        {
          color: "34",
          employee: [
            { name: "Rer33er" },
            { name: "WEe33dsdsd" },
            { name: "WEed33sdsd2" }
          ]
        },
        {
          color: "84",
          employee: [
            { name: "Rer33er" },
            { name: "WEe33dsdsd" },
            { name: "WEed33sdsd2" }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
.scroll-y
  max-height: calc(100% - 64px)
  overflow-y: scroll
</style>
<template>
  <v-card v-if="user" tile outlined class="ma-0">
    <v-card-title color="red">Структура компании</v-card-title>
    <v-divider></v-divider>
    <div class="d-flex flex-wrap pa-3 scroll-y">
      <Office v-for="(office, i) in user.offices" :key="i" :office="office" :position="i" />
      <Office />
    </div>
  </v-card>
</template>

<script>
import { mapState } from "vuex"
import Office from "~/components/office.vue"

export default {
  components: { Office },
  computed: mapState(["user"])
}
</script>

<style lang="sass" scoped>
.scroll-y
  max-height: calc(100% - 64px)
  overflow-y: scroll
</style>
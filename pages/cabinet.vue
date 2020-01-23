<template>
  <v-layout class="h100">
    <ProfileBar v-if="$store.getters.isLoggedIn" class="mr-5 min-max-width-300" />
    <Workspace />
  </v-layout>
</template>

<script>
import ProfileBar from "~/components/profileBar.vue"
import Workspace from "~/components/workspace.vue"
export default {
  middleware: ["auth"],
  components: { ProfileBar, Workspace }
}
</script>

<style lang="sass" scoped>
.min-max-width-300
  min-width: 240px
  max-width: 300px
.h100
  max-height: 100vh
</style>
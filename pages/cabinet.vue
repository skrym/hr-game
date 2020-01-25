<template>
  <v-layout v-if="$store.getters.isLoggedIn" class="cabinet">
    <ProfileBar class="min-max-width-300" />
    <Workspace class="flex-grow-1" />
    <MarketBar class="min-max-width-400" />
  </v-layout>
</template>

<script>
import ProfileBar from "~/components/profileBar.vue"
import MarketBar from "~/components/marketBar.vue"
import Workspace from "~/components/workspace.vue"
export default {
  middleware: ["auth"],
  components: { ProfileBar, MarketBar, Workspace }
}
</script>

<style lang="sass">
.min-max-width-300
  min-width: 300px
  max-width: 300px
.min-max-width-400
  min-width: 400px
  max-width: 520px
.cabinet
  max-height: 100vh
  font-size: 13px
</style>
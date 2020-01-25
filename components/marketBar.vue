<template>
  <v-navigation-drawer right permanent height="100vh">
    <v-expansion-panels accordion multiple>
      <v-expansion-panel v-for="(item,i) in 5" :key="i">
        <v-expansion-panel-header>Item</v-expansion-panel-header>
        <v-expansion-panel-content>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-navigation-drawer>
</template>

<script>
import { mapState } from "vuex"
import ProfileItem from "./profileItem.vue"

export default {
  components: { ProfileItem },
  computed: {
    ...mapState(["user"])
  },
  methods: {
    logout() {
      this.$store.dispatch("logout")
    }
  }
}
</script>
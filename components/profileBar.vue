<template>
  <v-navigation-drawer permanent height="100vh">
    <v-list dense nav class="py-0">
      <v-list-item class="justify-center ma-2">
        <v-list-item-avatar size="120" class="ma-2">
          <img src="/avatar.jpg" />
        </v-list-item-avatar>
      </v-list-item>
      <v-list-item>
        <v-list-item-content class="text-center">
          <v-list-item-title>{{user.userName}}</v-list-item-title>
          <v-list-item-subtitle>Директор компании</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <ProfileItem icon="mdi-cash" :value="user.account + ' $'" />
      <ProfileItem icon="mdi-logout-variant" value="Уровень 1" />
      <ProfileItem icon="mdi-cash-usd-outline" value="30$/день" />

      <v-divider></v-divider>

      <ProfileItem icon="mdi-logout-variant" value="Выйти" @click.native="logout" pointer />
    </v-list>
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
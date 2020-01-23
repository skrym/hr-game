<template>
  <v-card min-height="272" min-width="200" class="ma-3 py-3 d-flex flex-column">
    <div v-if="office">
      <hr :style="{ background: toHsl(office.color) }" class="office" />
      <v-list dense color="#ffffff00">
        <v-list-item v-for="i of 5" :key="i">
          <v-chip outlined label small>
            <v-icon small class="mr-2" :color="toHsl(office.color)">mdi-battery</v-icon>
            Сотрудник {{i}}
          </v-chip>
        </v-list-item>
      </v-list>
      <div class="flex-grow-1"></div>
      <v-btn x-small text bottom min-width="100%">Нанять сотрудника</v-btn>
    </div>
    <div v-else class="d-flex align-center full-height">
      <v-btn text bottom min-width="100%" disabled>Снять офис</v-btn>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    office: Object,
    default: null
  },
  data() {
    return {
      w: {
        w1: "re"
      }
    }
  },
  methods: {
    toHsl(color) {
      return `hsl(${Math.round(Number(color) * 3.59)}, 100%, 50%)`
    }
  }
}
</script>

<style lang="sass" scoped>
li
  padding: 8px 4px
  font-size: .8rem
.office
  height: 8px
  border: 0
  border-radius: 0!important
.full-height
  height: 100%
</style>
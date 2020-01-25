<template>
  <v-card min-height="272" min-width="200" class="ma-3 py-3">
    <div v-if="office" class="d-flex flex-column full-height">
      <hr :style="{ background: $options.filters.toHSL(office.aura) }" class="office" />
      <v-list v-if="office.workers.length" dense color="#ffffff00">
        <v-list-item v-for="(worker, i) in office.workers" :key="i">
          <v-chip outlined label small>
            <v-icon small class="mr-2" :color="$options.filters.toHSL(worker.aura)">mdi-battery</v-icon>
            {{ worker.name }}
          </v-chip>
        </v-list-item>
      </v-list>
      <div v-else class="text-center caption d-flex flex-column justify-center full-height pa-2">
        <div>Офис пуст</div>
        <div>Наймите первого сотрудника</div>
      </div>
      <div class="flex-grow-1"></div>
      <v-btn
        x-small
        text
        bottom
        min-width="100%"
        @click="hireWorker(office._id, position)"
      >Нанять сотрудника</v-btn>
    </div>
    <div v-else class="d-flex align-center full-height">
      <v-btn text bottom min-width="100%" @click="rentOffice">Арендовать офис</v-btn>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    office: Object,
    position: Number,
    default: null
  },
  filters: {
    toHSL(color) {
      return `hsl(${Math.round(Number(color) * 3.59)}, 80%, 60%)`
    }
  },
  methods: {
    rentOffice() {
      this.$store.dispatch("rentOffice")
    },
    hireWorker(officeId, position) {
      this.$store.dispatch("hireWorker", { officeId, position })
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
export const state = () => ({
  user: null
})

export const mutations = {
  SET_USER(state, user) {
    localStorage.setItem('userId', user._id)
    state.user = user
  },
  REMOVE_USER(state) {
    localStorage.removeItem('userId')
    state.user = null
  },
  ADD_OFFICE(state, office) {
    office.workers = []
    state.user.offices.push(office)
  },
  ADD_WORKER(state, {
    worker,
  }) {
    const officeIndex = state.user.offices
      .findIndex(office => office._id === worker.officeId)
    state.user.offices[officeIndex].workers.push(worker)
  }
}

export const actions = {
  login({
    commit,
    dispatch
  }, userName) {
    this.$axios.$post('/api/v1/users', {
        userName
      })
      .then(user => {
        commit('SET_USER', user.data)
        dispatch('fetchUser')
      })
      .catch(err => console.error(err))
  },
  fetchUser({
    commit,
    dispatch
  }) {
    let t = this
    this.$axios.$get(`/api/v1/users/${localStorage.getItem('userId')}`)
      .then(data => {
        commit('SET_USER', data.user)
        t.$router.push('/cabinet')
      })
      .catch(() => dispatch('logout'))
  },

  logout({
    commit
  }) {
    commit('REMOVE_USER')
    this.$router.push('/')
  },

  rentOffice({
    state,
    commit
  }) {
    let userId = state.user._id
    this.$axios.$post(`/api/v1/offices/`, {
        userId
      })
      .then(office => {
        commit('ADD_OFFICE', office.data)
      })
      .catch(err => console.log('error: ', err))
  },

  hireWorker({
    state,
    commit
  }, {
    officeId,
  }) {
    let userId = state.user._id
    this.$axios.$post(`/api/v1/workers/`, {
        userId,
        officeId
      })
      .then(worker => {
        commit('ADD_WORKER', {
          worker: worker.data,
        })
      })
      .catch(err => console.log('error: ', err))
  }
}

export const getters = {
  isLoggedIn: (state) => state.user ? true : false
}
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
  }
}

export const actions = {
  login({ commit }, userName) {
    let t = this
    this.$axios.$post('/api/v1/users', { userName })
      .then(user => {
        commit('SET_USER', user.data)
        t.$router.push('/cabinet')
      })
      .catch(err => console.error(err))
  },
  fetchUser({ commit, dispatch }) {
    let t = this
    this.$axios.$get(`/api/v1/users/${localStorage.getItem('userId')}`)
      .then(data => {
        commit('SET_USER', data.user)
        t.$router.push('/cabinet')
      })
      .catch(() => dispatch('logout'))
  },
  logout({ commit }) {
    commit('REMOVE_USER')
    this.$router.push('/')
    console.log('redirect to / route from logout func')
  }
}

export const getters = {
  isLoggedIn: (state) => state.user ? true : false
}
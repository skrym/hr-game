
export const mutations = {
  ADD(state, user) {
    localStorage.setItem('userId', user._id)
    state.user = user
  }
}

export const actions = {
  create({ state, commit }) {
    let t = this
    this.$axios.$post(`/api/v1/users/${state.user._id}`)
      .then(data => {
        commit('SET_USER', data.user)
        t.$router.push('/cabinet')
      })
      .catch(() => dispatch('logout'))
  }
}

export const getters = {
  isLoggedIn: (state) => state.user ? true : false
}
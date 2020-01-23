export default function ({ redirect, store, route }) {
  console.log(route)
  if (!localStorage.getItem('userId')) {
    if (route.path !== '/') redirect('/')
    console.log('redirect to / route from middleware')
  } else if (!store.getters.isLoggedIn) {
    store.dispatch('fetchUser')
    console.log('fetchUser from middleware')
  }
}
export default function ({
  redirect,
  store,
  route
}) {
  if (!localStorage.getItem('userId')) {
    if (route.path !== '/') redirect('/')
  } else if (!store.getters.isLoggedIn) {
    store.dispatch('fetchUser')
  }
}
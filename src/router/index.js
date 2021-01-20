import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Chatroom from '../views/Chatroom.vue'
import { projectAuth } from '../firebase/config'

//auth guard
const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  //console.log('authguard user', user)
  if(!user){
    //redirect
    next({
      name: 'Welcome'
    })
  } else {
    //send to chatroom
    next()
  }
}

const requireNoAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  if(user){
    //redirect
    next({
      name: 'Chatroom'
    })
  } else {
    //send to chatroom
    next()
  } 
}

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
    beforeEnter: requireNoAuth
  },
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: Chatroom,
    beforeEnter: requireAuth
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

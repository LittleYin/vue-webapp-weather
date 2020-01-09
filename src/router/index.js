import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('../components/home/Home')
const Weather = () => import('../components/weather/Weather')
const Joke = () => import('../components/joke/Joke')
const About = () => import('../components/about/About')

Vue.use(Router)

const routes = [
  {
    path:'*',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/weather',
    name: 'Weather',
    component: Weather
  },
  {
    path: '/joke',
    name: 'Joke',
    component: Joke
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

export default new Router({
  routes,
  // mode:'history'
})

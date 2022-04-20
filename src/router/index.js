import Vue from 'vue'
import VueRouter from 'vue-router'
import AddPharmacy from '../components/main-utils/home-content/create.vue'
import DashboardIndex from '../components/main-utils/home-content/index.vue'
import PillIndex from '../components/main-utils/pill-shop/index.vue'
import AddDrug from '../components/main-utils/pill-shop/add-drug.vue'
import AddPill from '../components/main-utils/pill-box/add-pill.vue'
import PillBox from '../components/main-utils/pill-box/index.vue'
import Profile from '../components/main-utils/profile/index.vue'
import PharmProfile from '../components/main-utils/profile/pharm.vue'


Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/add-pharmacy',
  //   name: 'pharmacy',
  //   // route level code-splitting
  //   // this generates a separate chunk (pharmacy.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "pharmacy" */ '../components/main-utils/home-content/create.vue')
  // },
  {
    path: '/',
    name: 'Dashboard',
    component: DashboardIndex 
  },
  {
    path: '/add-pharmacy',
    name: 'Pharmacy',
    component: AddPharmacy
  },
  {
    path: '/pill-shop',
    name: 'Drugs',
    component: PillIndex
  },
  {
    path: '/add-drug',
    name: 'Drug',
    component: AddDrug
  },
  {
    path: '/pill-box',
    name: 'Pillbox',
    component: PillBox
  },
  {
    path: '/add-pill',
    name: 'Pill',
    component: AddPill
  },
  {
    path: '/profile',
    name: Profile,
    component: Profile
  },
  {
    path: '/pharm-profile',
    name: PharmProfile,
    component: PharmProfile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

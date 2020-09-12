import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import ReportItem from '@/components/automation/ReportItem.vue'
import DefaultChart from '@/components/dashboard/DefaultChart.vue'

const routes: Array<RouteRecordRaw> = [
  {
    alias: '/menu',
    path: '/dashboard',
    name: 'Dashboard',
    component: DefaultChart
  },
  {
    alias: '/menu',
    path: '/automation',
    name: 'Automation',
    component: ReportItem
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

export const menuRoutes = () => {
  const menues = new Array<RouteRecordRaw>()
  routes.forEach(function (route) {
    console.log(route.alias)
    if (route.alias === '/menu') {
      menues.push(route)
    }
  })
  return menues
}

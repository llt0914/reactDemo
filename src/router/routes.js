import App from '@/App'
import Home from '@/view/home/index'
import List from '@/view/list/index'
import Self from '@/view/self/index'

const routes = [
  {
    component: App,
    routes: [
      {
        component: Home,
        name: 'home',
        path: '/',
        exact: true,
        meta: {
          title: 'home'
        }
      },
      {
        component: List,
        name: 'list',
        path: '/list',
        meta: {
          title: 'list'
        }
      },
      {
        component: Self,
        name: 'self',
        path: '/self',
        meta: {
          title: 'self'
        }
      }
    ]
  }
]
export default routes

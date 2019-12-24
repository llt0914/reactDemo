import App from '@/App'
import Home from '@/view/home/index'
import Homedemo1 from '@/view/home/homedemo1'
import Homedemo2 from '@/view/home/homedemo2'
import Homedemo3 from '@/view/home/homedemo3'
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
        meta: {
          title: 'home'
        },
        routes: [
          {
            component: Homedemo1,
            name: 'homedemo1',
            path: '/',
            exact: true,
            meta: {
              title: 'homedemo1'
            }
          },
          {
            component: Homedemo2,
            name: 'homedemo2',
            path: '/homedemo2',
            meta: {
              title: 'homedemo2'
            }
          },
          {
            component: Homedemo3,
            name: 'homedemo3',
            path: '/homedemo3',
            meta: {
              title: 'homedemo3'
            }
          }
        ]
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

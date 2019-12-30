import App from '@/App'
import Home from '@/view/home/index'
import HomeRoot from '@/view/homeRoot/index'
import Homedemo1 from '@/view/home/homedemo1'
import Homedemo2 from '@/view/home/homedemo2'
import Homedemo3 from '@/view/home/homedemo3'
import Classify from '@/view/classify/index'
import Recommend from '@/view/recommend/index'
import Shopcart from '@/view/shopcart/index'
import Owens from '@/view/owens/index'

const routes = [
  {
    component: App,
    routes: [
      {
        component: HomeRoot,
        name: 'homeRoot',
        path: '/',
        meta: {
          title: 'homeRoot'
        },
        routes: [
          {
            component: Home,
            name: 'home',
            path: ['/', '/homedemo2', '/homedemo3'],
            exact: true,
            meta: {
              title: '首页'
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
            component: Classify,
            name: 'classify',
            path: '/classify',
            meta: {
              title: '分类'
            }
          },
          {
            component: Recommend,
            name: 'recommend',
            path: '/recommend',
            meta: {
              title: '推荐'
            }
          },
          {
            component: Shopcart,
            name: 'shopcart',
            path: '/shopcart',
            meta: {
              title: '购物车'
            }
          },
          {
            component: Owens,
            name: 'owens',
            path: '/owens',
            meta: {
              title: '个人中心'
            }
          }
        ]
      }


    ]
  }
]
export default routes

import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'
import { NavLink } from 'react-router-dom'
import styles from './index.module.scss'

export default class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navigationList: [
        {
          pathname: '/',
          title: '首页'
        }, {
          pathname: '/classify',
          title: '分类'
        }, {
          pathname: '/recommend',
          title: '推荐'
        }, {
          pathname: '/shopcart',
          title: '购物车'
        }, {
          pathname: '/owens',
          title: '个人中心'
        }
      ]
    }
  }

  render() {
    const { navigationList } = this.state
    const { route } = this.props
    return (
      <div className={styles.homeroot}>
        {renderRoutes(route.routes)}
        <ul className={styles.navigation}>
          {
              navigationList.map(item => (
                <li key={item.pathname}>
                  <NavLink
                    to={{
                      pathname: item.pathname
                    }}
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))
            }
        </ul>
      </div>
    )
  }
}

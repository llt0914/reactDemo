import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config'
import { NavLink } from 'react-router-dom'
import styles from './index.module.scss'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      titletop: '首页',
      leftnavigation: [
        {
          pathname: '/',
          title: '首页demo1'
        }, {
          pathname: '/homedemo2',
          title: '小样2'
        }, {
          pathname: '/homedemo3',
          title: '小样3'
        }
      ]
    }
  }

  render() {
    const { titletop, leftnavigation } = this.state
    const { route } = this.props
    return (
      <div className={styles.home}>
        <h1 className={styles.hometitle}>{titletop}</h1>
        <ul className={styles.leftnavigation}>
          {
            leftnavigation.map(item => (
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
        <div className={styles.rightContent}>
          {renderRoutes(route.routes)}
        </div>
      </div>
    )
  }
}

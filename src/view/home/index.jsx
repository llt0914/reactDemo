import React from 'react';
import { renderRoutes } from 'react-router-config'
import { NavLink } from 'react-router-dom'

const Home = ({ route }) => (
  <div>
    <h3>Home列表页面</h3>
    <div>
      <NavLink to={{
        pathname: '/',
        exact: true
      }}
      >
        首页
      </NavLink>
      <NavLink to={{
        pathname: '/homedemo2'
      }}
      >
        首页2
      </NavLink>
      <NavLink to={{
        pathname: '/homedemo3'
      }}
      >
        首页3
      </NavLink>
    </div>
    {renderRoutes(route.routes)}
  </div>
)
export default Home

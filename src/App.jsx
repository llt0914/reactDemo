import React from 'react';
import { renderRoutes, matchRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
import store from '@/store'
import 'antd/dist/antd.css'

const App = ({ location, route }) => {
  // const { route,history,match,location } = props
  const branch = matchRoutes(route.routes, location.pathname);
  branch.reverse()
  for (const item of branch) {
    const { meta } = item.route
    if (meta && meta.title) {
      document.title = meta.title
      break
    }
  }
  return (
    <Provider store={store}>
      {renderRoutes(route.routes)}
    </Provider>
  )
}

export default App

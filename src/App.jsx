import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom';
import routes from './router';
import "@/App.less";


const App = memo(() => {
  return (
    <div className='app'>
      <div className="header">
        头部
      </div>
      <div className="content">
        {useRoutes(routes)}
      </div>
      <div className="footer">
        尾部
      </div>
    </div>
  )
})

export default App
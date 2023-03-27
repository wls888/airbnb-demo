import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom';
import CHeader from '@/components/c-header';
import CFooter from '@/components/c-footer';
import routes from './router';


const App = memo(() => {
  return (
    <div className='app'>
      <CHeader/>
      <div className="content">
        {useRoutes(routes)}
      </div>
      <CFooter/>
      
    </div>
  )
})

export default App
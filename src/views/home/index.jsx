import request from '@/service';
import React, { memo, useEffect, useState } from 'react'

const Home = memo(() => {
  const [highScore,setHighScore]=useState({});

  useEffect(()=>{
    request.get({url:"/home/highscore"}).then(res=>{
      setHighScore(res);
    })
  },[]);

  return (
    <div className='home'>
      <h2>home</h2>
      <h3>{highScore.title}</h3>
    </div>
  )
})

export default Home
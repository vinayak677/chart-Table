import React from 'react'
import Table1 from './Table1'
import Table2 from './Table2'

const Home = () => {
  return (
    <div className='flex flex-row gap-5 mt-5 mx-5'>
        <div className='w-1/2'>
        <Table1/>
        </div>
        <div style={{border:"1px solid black",borderRadius:"10px"}} className='w-1/2 h-[495px] '>
        <Table2/>
        </div>
    </div>
  )
}

export default Home
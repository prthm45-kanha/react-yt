import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='  gap-10 flex items-center h-[88vh] px-18 pb-12 pt-4'>
        <LeftContent/>
        <RightContent ussser={props.useeer}/>
        
      
    </div>
  ) 
}

export default Page1Content

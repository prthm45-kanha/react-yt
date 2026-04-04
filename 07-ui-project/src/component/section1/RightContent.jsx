import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id="right" className=' flex flex-nowrap overflow-x-auto gap-10 h-full p-6 w-2/3'>
        {props.ussser.map(function(elem,idx){
        return <div key={idx}>
          <RightCard id={idx} color={elem.color} imgg={elem.img} tag={elem.tag} intro={elem.intro} />
        </div>
      })}
    </div>
  )
}

export default RightContent
 
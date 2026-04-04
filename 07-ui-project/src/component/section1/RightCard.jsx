import React from 'react'

import RightCardContext from './RightCardContext'
const RightCard = (props) => {
  return (
    <div className='h-full w-50  shrink-0 overflow-hidden relative rounded-2xl '>
      <img className='h-full w-full object-cover ' src={props.imgg} alt='Card Image'/>

      
<RightCardContext idd={props.id} colorr={props.color} taggg={props.tag} introoo={props.intro} />
    

    </div>
  )
}

export default RightCard

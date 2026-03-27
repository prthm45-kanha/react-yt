import React from 'react'

const Card = (props) => {
    console.log(props);
  return (
    <div>
        <div className='card'>
        <img src={props.img} alt='profile' />
        <h1>{props.user},{props.age}</h1>
        <p>lorem 8 ipsum dolor sit amet, consectetur adipiscing elit. </p>
        <button>View Profile</button>
      </div>
    </div>
  )
}

export default Card
 
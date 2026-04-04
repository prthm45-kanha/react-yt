import React from 'react'
import Section1 from './component/section1/Section1'
import Section2 from './component/section2/Section2'

const App = () => {

  const users=[
    {
      img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'Lorem ippppsum dolor sit amet consectetur adipisicing elit. Dolorum,rt ad.',
            tag:'Satisfied',
            color:'blue'
    },
    {
       img:'https://images.unsplash.com/photo-1600275669439-14e40452d20b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29ya2luZyUyMHdvbWVufGVufDB8fDB8fHww',
      intro:'Lorem ipssssum dolor sit amet consectetur adipisicing elit. Dolorum,rt ad.',
     color:'lightseagreen',
      tag:'Underserved'
    },
    {
       img:'https://plus.unsplash.com/premium_photo-1675272833807-fb6d8293210c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHdvbWVufGVufDB8fDB8fHww',
      intro:'Lorem ipsuuuum dolor sit amet consectetur adipisicing elit. Dolorum,rt ad.',
      color:'pink',
      tag:'UnderBanked'
    },
    {
      img:'https://images.unsplash.com/photo-1603202662706-62ead3176b8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHdvcmtpbmclMjB3b21lbnxlbnwwfHwwfHx8MA%3D%3D',
      intro:'Lorem ipsuuuum dolor sit amet consectetur adipisicing elit. Dolorum,rt ad.',
      color:'orange',
      tag:'UnderBanked'
    }
        ]
  return (
    <div> 
     <Section1 userrr={users}/>
     <Section2/>
    </div>
  )
}

export default App

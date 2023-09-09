import React from 'react'
import { useSelector } from 'react-redux'

function CardFile() {


    const take = useSelector(state=>state.Sample.Data)
    console.log(take,'XXXX')
    
  return (
    <div>
        
    </div>
  )
}

export default CardFile
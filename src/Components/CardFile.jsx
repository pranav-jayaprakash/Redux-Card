import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { DataFile } from '../Redux/Api'

function CardFile() {

    const dispatch = useDispatch()

    const handleclick=(e)=>{
        e.preventDefault()
        
        DataFile(dispatch)


    }


    const take = useSelector(state=>state.Sample.Data)
    console.log(take,'XXXX')

  return (
    <div>
        <button onClick={handleclick}>Click for Data</button>
        
    </div>
  )
}

export default CardFile
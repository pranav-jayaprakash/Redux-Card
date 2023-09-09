import axios from 'axios'
import { Adder } from './DataSlice'

export const DataFile=async(dispatch)=>{
    try {

        const files = await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log(files.data)
        dispatch(Adder(files.data))

    } catch (err) {

        console.log(err)
        
    }
}
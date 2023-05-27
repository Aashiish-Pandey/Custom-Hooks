import {useState} from 'react'

export function useArray(defaultValue) {

    const[array,setArray]= useState(defaultValue)

    function push(element) {

        setArray(prev=>[...prev,element])

    }

    function filter(callback) {
        setArray(a=>a.filter(callback))

    }

    const clear =()=>{
        setArray([])
    }
return {array,push,filter,clear}


}
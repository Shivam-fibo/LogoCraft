import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { UpdateStorageContext } from '@/context/UpdateStorageContext'
export default function LogoPreview() {

    const[storage, setStorage] = useState()
    const{updateStorage, setUpdateStorage} = useContext({UpdateStorageContext})

   useEffect(() =>{
    const storageValue = JSON.stringify(localStorage.getItem('value'))
    setStorage(storageValue)
   }, [updateStorage])
  return (
    <div className="flex items-center justify-center h-screen">
    <div className="h-[400px] w-[400px] bg-gray-200 outline-dotted outline-gray-300">
      <div className="h-full w-full"
        style={{
            borderRadius:storageValue?.bgRound,
            background: storageValue?.bgColor,
        }}
      
      >

      </div>
    </div>
  </div>
  
  )
}

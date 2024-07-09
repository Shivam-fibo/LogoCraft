import React from 'react'
import { Button } from './ui/button'
import {Download} from 'lucide-react'
function Header() {
  return (
    <div className='flex justify-between p-4 border shadow-sm items-center'>
<img src="/logo.png" alt="logo" className="w-14 h-14 object-cover object-center" />
      <Button className = 'flex gap-2 items-center'><Download className='h-4 w-4'/> Donwload</Button>
      
    </div>
  ) 
}

export default Header
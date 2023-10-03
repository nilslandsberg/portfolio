import Image from 'next/image'
import React from 'react'
import logo from '../../public/images/logo.png'

const NavBar = () => {
  return (
    <nav className={"bg-slate-600 dar:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600"}>
      <div className="p-4">
        <Image src={logo} alt="logo" height={200} width={200}/>
      </div>
    </nav>
  )
}

export default NavBar
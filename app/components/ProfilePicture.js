import React from 'react'
import Image from 'next/image'
import profilePicture from '../../public/images/landsberg_nils.jpeg'

const ProfilePicture = () => {
  return (
    <div className="flex justify-center items-center">
      <Image className="rounded-full shadow-xl dark:shadow-gray-800" src={profilePicture} />
    </div>
  )
}

export default ProfilePicture
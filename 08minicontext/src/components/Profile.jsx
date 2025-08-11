import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'


const Profile = () => {
    const {user} = useContext(UserContext)
    if(!user) return <div className="">Please Login</div>

    return <div className="">Welcome: {user.username}</div>
}

export default Profile
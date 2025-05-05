import React from 'react'
import { useState } from 'react'

type UserType = {
    name: string,
    email: string,
    phone: string,
}

function LoginCheck() {

    const [user, setUser] = useState<UserType | null >({} as UserType);

    const handleLogin = () => {
        setUser({
            name: 'Furkan',
            email: 'fsoylu567@hotmail.com',
            phone: '0554 655 64 64'
        });
    }

    const handleLogout = () => {

    }

  return (
    <div>
        <button onClick={handleLogin}>Log In</button>
        <button onClick={handleLogout}>Log Out</button>
        <p>{user?.name}</p>
        <p>{user?.email}</p>
        <p>{user?.phone}</p>
    </div>
  )
}

export default LoginCheck
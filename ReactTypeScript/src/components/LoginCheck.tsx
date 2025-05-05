import React from 'react'
import { useState } from 'react'

type UserType = {
    name: string,
    email: string,
    phone: string,
}

function LoginCheck() {

    const [user, setUser] = useState<UserType | null >(null);

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
        <div></div>
    </div>
  )
}

export default LoginCheck
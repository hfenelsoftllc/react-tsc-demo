import { useState } from "react";

type AuthUser ={
    name: string
    email: string
}


export const User =() =>{
    // Deconstruction of useState props
    const [user, setUser] = useState<AuthUser>({} as AuthUser)

    const handleLogin= () =>{
        setUser({
            name: 'Fenel',
            email: 'hfenelsoftllc@example.com',
        })
    }

    // const handleLogout = () =>{
    //     setUser(null)
    // }

    return(
        <div>
            <button onClick={handleLogin}>Login</button>
            {/* <button onClick={handleLogout}>Logout</button> */}
            <div>User name is {user.name}</div>
            <div>User email is {user.email}</div>
        </div>
    )
}
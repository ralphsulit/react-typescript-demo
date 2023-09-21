import { useState } from "react";

type AuthUser = {
  name: string
  email: string
}

export const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setUser({
      name: 'John',
      email: 'JohnDoe@example.com',
    });
    setIsLoggedIn(true);
  }
  
  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
  }

  return (
    <>
      {isLoggedIn ? (
        <>
          <button onClick={handleLogout}>Logout</button>
          <div>User name is {user?.name}</div>
          <div>User email is {user?.email}</div>
        </>
      ) : (
          <>
            <button onClick={handleLogin}>Login</button>
            <div>User name is {user?.name}</div>
            <div>User email is {user?.email}</div>
          </>
      )

      }
    </>
  )
}
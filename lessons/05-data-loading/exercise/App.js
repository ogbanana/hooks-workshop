import React, { useState, useEffect } from 'react'

import { onAuthStateChanged } from 'app/utils'
import LoggedIn from 'app/LoggedIn'
import LoggedOut from 'app/LoggedOut'

export default function App() {
  const [auth, setAuth] = useState(null)
  const [authAttempted, setAuthAttempted] = useState(false)
  /* If state value has not changed, react will not render again. */
  useEffect(()=>{
    return onAuthStateChanged(auth=> {
      setAuthAttempted(true)
      setAuth(auth)
    })
  },[])
  
  if (!authAttempted) {
    return <p>Authenticating...</p>
  }

  return (
    <div className="Layout">
      {auth ? <LoggedIn auth={auth} /> : <LoggedOut />}
    </div>
  )
}

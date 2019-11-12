import React, { useState } from "react"
import VisuallyHidden from "@reach/visually-hidden"
import { FaSignInAlt } from "react-icons/fa"
import TabsButton from "app/TabsButton"
import { login } from "app/utils"

// import LoginFormFinal from './LoginForm.final'
// export default LoginFormFinal

export default function LoginForm() {
  const [showPassword, setshowPassword] = useState(false)
  const [loading, setloading] = useState(false)



  const onChangePassword = () => {
    setshowPassword(!showPassword)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    setloading(true)
    console.log(event.target.elements)
    const [emailNode, passwordNode] = event.target.elements
    try {
    login(emailNode.value, passwordNode.value)
    } catch (err) {
      console.log(err)
      setloading(false)
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <VisuallyHidden>
        <label htmlFor="login:email">Email:</label>
      </VisuallyHidden>
      <input
        type="text"
        id="login:email"
        className="inputField"
        placeholder="you@example.com"
      />

      <VisuallyHidden>
        <label htmlFor="login:password">Password:</label>
      </VisuallyHidden>
      <input
        id="login:password"
        type={showPassword? 'text': 'password'}
        className="inputField"
        placeholder="Password"
      />

      <div>
        <label>
          <input
            className="passwordCheckbox"
            type="checkbox"
            defaultChecked={false}
            onChange = {onChangePassword} 
          />{" "}
          show password
        </label>
      </div>

      <TabsButton>
        <FaSignInAlt />
        <div>
        {loading? "Loading ... ": 'Login'}
        </div>
      </TabsButton>
    </form>
  )
}

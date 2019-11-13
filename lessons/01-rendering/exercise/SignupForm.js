import React, { Fragment, useState } from "react"
import VisuallyHidden from "@reach/visually-hidden"
import { signup } from "app/utils"
import TabsButton from "app/TabsButton"
import { FaDumbbell } from "react-icons/fa"
import { DateFields, MonthField, DayField, YearField } from "app/DateFields"
// import SignupForm from "./SignupForm.final"
// export default SignupForm

export default function SignupForm() {
  return <form className="SignupForm">
    Display Name
    <input id="displayName" label="Display Name" type="text"/><br/>
    Photo URL
    <input id="photoURL" label="Avatar URL" type = "text"/><br/>
    Email
    
    <input id="email" label="Email" type="text" /><br/>
    Password
    <br/>
    <input id="password" label="Password" type="password"/>
    <p>
    <span aria-hidden="true">Start:</span>
    <DateFields value={new Date()}>
      <MonthField aria-label="Start Month"/>
      <DayField aria-label="Start Day"/>
      <YearField start={2018} end={2019} aria-label="Start year" />
    </DateFields>
    </p>
    <TabsButton>
    <FaDumbbell />
    <span>Sign Up</span>
    </TabsButton>
  </form>
}

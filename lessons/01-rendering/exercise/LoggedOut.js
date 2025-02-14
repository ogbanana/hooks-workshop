import React from "react"
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs"
import LoginForm from "app/LoginForm"
import SignupForm from "app/SignupForm"
import About from "app/About"
// import LoggedOut from "./LoggedOut.final"
// export default LoggedOut

export default function LoggedOut() {
  return <div className="LoggedOut">
    <Tabs>
      <TabList>
        <Tab>Sign Up</Tab>
        <Tab>Log in</Tab>
      </TabList>
        <TabPanels>
          <TabPanel>
            <SignupForm/>
          </TabPanel>
          <TabPanel>
            <LoginForm/>
            </TabPanel>         
          </TabPanels>
        
      </Tabs>
    <About/>
    </div>
  
}

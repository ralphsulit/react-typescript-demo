import { Fragment } from "react"

type GreetProps = {
  name: string
  messageCount: number 
  isLoggedIn: boolean

}

export const Greet = (props: GreetProps) => {
  return (
    <Fragment>
      {
        props.isLoggedIn
          ? `Welcome, ${props.name}! You have ${props.messageCount} unread messages.`
          : `Welcome, Guest`
      }
      
    </Fragment>
  )
};
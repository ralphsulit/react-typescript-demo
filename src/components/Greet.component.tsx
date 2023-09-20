import { Fragment } from "react"

type GreetProps = {
  name: string
}

export const Greet = (props: GreetProps) => {
  return (
    <Fragment>
      <h2>Welcome, {props.name}!</h2>
    </Fragment>
  )
};
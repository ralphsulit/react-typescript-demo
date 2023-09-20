import { Fragment } from "react";

type PersonProps = {
  name: {
    firstName: string
    lastName: string
  }
}

export const Person = (props: PersonProps) => {
  return (
    <Fragment>
      {props.name.firstName} {props.name.lastName}
    </Fragment>
  )
};
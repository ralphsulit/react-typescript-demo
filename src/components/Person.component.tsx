import { Fragment } from "react";

type PersonProps = {
  name: {
    firstName: string
    lastName: string
  }
}

export const Person = (props: PersonProps) => {
  const { firstName, lastName } = props.name;

  return (
    <Fragment>
      {firstName} {lastName}
    </Fragment>
  )
};
import { Fragment } from "react";

type PersonListProps = {
  names: {
    firstName: string
    lastName: string
  }[]
}

export const PersonList = (props: PersonListProps) => {
  return (
    <Fragment>
      {
        props.names.map(name => {
          return (
            <h2 key={name.firstName}>
              {name.firstName} {name.lastName}
            </h2>
          )
        })
      }
    </Fragment>
  );
};
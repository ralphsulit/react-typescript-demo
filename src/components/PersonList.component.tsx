import { Fragment } from "react";

import { Name } from './Person/Person.types';

type PersonListProps = {
  names: Name[]
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
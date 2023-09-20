import { Fragment } from "react";

import { PersonProps } from './Person.types';

export const Person = (props: PersonProps) => {
  const { firstName, lastName } = props.name;

  return (
    <Fragment>
      {firstName} {lastName}
    </Fragment>
  )
};
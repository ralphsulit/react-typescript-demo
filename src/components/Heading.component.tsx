import { Fragment } from "react";

type HeadingProps = {
  children: string 
}

export const Heading = (props: HeadingProps) => {
  return (
    <Fragment>
      <h2>{props.children}</h2>
    </Fragment>
  );
};
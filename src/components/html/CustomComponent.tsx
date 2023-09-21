import React from 'react'
import { Greet } from '../Greet.component'

export const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
  return (
    <div>
      {props.name}
    </div>
  )
}

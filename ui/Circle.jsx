import React from 'react'
import Circle from 'funuicss/ui/specials/Circle'

export default function CircleUi({children , ...rest}) {
  return (
    <Circle {...rest}>{ children || '' }</Circle>
  )
}

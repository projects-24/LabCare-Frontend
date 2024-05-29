import React from 'react'
import Text from 'funuicss/ui/text/Text'

export default function TextUi({children , ...rest}) {
  return (
    <Text {...rest}>{ children || '' }</Text>
  )
}

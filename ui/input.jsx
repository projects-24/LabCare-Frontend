import React from 'react'
import Input from 'funuicss/ui/input/Input'
import Text from 'funuicss/ui/text/Text'


export default function cls
({label, standard, hint, required, ...rest }) {
  return <div>
    <Text 
    text={`${label} ${required ? '*' : ''}` || ''} 
    block 
    size='smaller' 
    uppercase 
    bold 
    color='violet'
    funcss='margin-bottom-10'
    />
    <Input label={hint || ''} funcss='dark900 _input roundEdgeSmall' borderless {...rest} fullWidth />
</div>
}

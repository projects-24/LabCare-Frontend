import React from 'react'
import Button from 'funuicss/ui/button/Button'

export default function UiButton({primary, dark, text , ...rest}) {
  return primary ? <Button 
  bg='primary' 
  text={text || ''} 
  {...rest}
  /> : dark ? <Button 
  {...rest} 
  bg='dark'
  /> : <Button 
  text={text || ''}
  {...rest} 
  />
  
}

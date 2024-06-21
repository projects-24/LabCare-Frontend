'use client'
import React from 'react'
import FullCenteredPage from 'funuicss/ui/specials/FullCenteredPage'
import Input from '@/ui/input'
import UiButton from '@/ui/button'
import Logo from '@/ui/logo'
import SectionUI from '@/ui/section'


export default function Home() {
  return (
    <FullCenteredPage funcss='login_page'>
      <div className="width-300-max padding fit " style={{transform:`translateY(-20%)`}}>
        <Logo />
        <SectionUI gap={2}/>
        <div className='section'>
          <Input hint={'username@email.com'} required type='email' label='Name' id='email' standard/>
        </div>
        <div className='section'>
          <Input hint={'**********'} required type='password' label='Password' id='password' standard />
        </div>
        <div className="margin-top-30">
          <UiButton
          onClick={() => window.location.assign('/new/branch')}
          text='Login'
          primary 
          fullWidth
          bold 
          />
        </div>
      </div>
    </FullCenteredPage>
  )
}

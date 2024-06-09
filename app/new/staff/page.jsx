'use client'
import Content from '@/ui/Content'
import Header from '@/ui/Header'
import Side from '@/ui/sidebar'
import React, { useState } from 'react'
import Card from 'funuicss/ui/card/Card'
import RowFlexUi from '@/ui/RowFlex'
import TextUi from '@/ui/Text'
import UiButton from '@/ui/button'
import { PiPaperPlane, PiTrash, PiUser, PiX } from 'react-icons/pi'
import Input from '@/ui/input'
import SectionUI from '@/ui/section'
import CircleUi from '@/ui/Circle'
import Modal from 'funuicss/ui/modal/Modal'
import TableUI from '@/ui/Table'

const get_regions = () => [
  {
      "value": "",
      "text": "-- Select Region --"
  },
  {
      "value": "Greater Accra",
      "text": "Greater Accra"
  },
  {
      "value": "Ashanti",
      "text": "Ashanti"
  },
  {
      "value": "Bono",
      "text": "Bono"
  },
  {
      "value": "Bono East",
      "text": "Bono East"
  },
  {
      "value": "Ahafo",
      "text": "Ahafo"
  },
  {
      "value": "Central",
      "text": "Central"
  },
  {
      "value": "Eastern",
      "text": "Eastern"
  },
  {
      "value": "Northern",
      "text": "Northern"
  },
  {
      "value": "Savannah",
      "text": "Savannah"
  },
  {
      "value": "North East",
      "text": "North East"
  },
  {
      "value": "Upper East",
      "text": "Upper East"
  },
  {
      "value": "Upper West",
      "text": "Upper West"
  },
  {
      "value": "Volta",
      "text": "Volta"
  },
  {
      "value": "Oti",
      "text": "Oti"
  },
  {
      "value": "Western",
      "text": "Western"
  },
  {
      "value": "Western North",
      "text": "Western North"
  }
]
export default function Staff() {
  const [open, setopen] = useState(false)

  const Submit = async (data) => {
    let branch, region 
    branch = data.get('branch')
    region = data.get('region')
    console.log(region, branch)
    
  }


  
  return (
    <div>
            <Modal
          open={open}
          close={<PiX onClick={() => setopen(false)} size={27} className='pointer'/>}
          animation="SlideDown"
          flat
          title={
            <div className='container'>
                <TextUi text='Create & Edit'/>
                <TextUi text='Staff👨‍💼' heading='h2' bold color='dark400' block/>
          </div>
          }
          body={
          <div className='container'>
              <RowFlexUi gap={1} alignItems='flex-start' funcss="margin-top-20">
              <div className='col'>
                <Input label={'Email'} hint={'username@email.com'} fullWidth name='email'/>
              </div>
              <div className='col'>
              <Input label={'Password'} type='password' hint={'025710700'} fullWidth name='password'/>
              </div>
            </RowFlexUi>
              <RowFlexUi gap={1} alignItems='flex-start' funcss="margin-top-20">
              <div className='col'>
                <Input label={'Full Name'} hint={'username'} fullWidth name='fullname'/>
              </div>
              <div className='col'>
              <Input label={'Phone'} hint={'025710700'} fullWidth name='phone'/>
              </div>
            </RowFlexUi>
              <RowFlexUi gap={1} alignItems='flex-start' funcss="margin-top-20">
              <div className='col'>
                <Input label={'Position'} hint={'user position'} fullWidth name='position'/>
              </div>
              <div className='col'>
              <Input label={'Role'} hint={'Role'} fullWidth name='role'/>
              </div>
            </RowFlexUi>
          </div>
          }
          footer={
            <div className="text-right container">
                     <UiButton type='submit' text={'Submit'} bold bg='primary' endIcon={<PiPaperPlane />}/>
            </div>
          }
          />

        <Side />
        <Content>
          <Header />
          <Card 
          funcss='roundEdgeSmall padding-20'
          body={
          <TableUI
          funcss='text-small'
          right={<UiButton text={'Create Staff'} bold bg='primary' startIcon={<PiUser />} onClick={ () => setopen(true) } />}
          data={{
            "data": [],
            "titles": ["Email", "Full Name", "Role", "Position", "position"],
            "fields": ["email", "fullname", "role", "position", "position"],
          }}
          />
          }
          />
        
            
        </Content>
    </div>
  )
}

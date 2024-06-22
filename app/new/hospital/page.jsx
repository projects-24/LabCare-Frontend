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
export default function Hospital() {
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
                <TextUi text='🩺Hospital' heading='h2' bold color='dark400' block/>
          </div>
          }
          body={
          <div className='container'>
              <RowFlexUi gap={1} alignItems='flex-start' funcss="margin-top-20">
              <div className='col'>
                <Input label={'Name'} hint={'hospital name'} fullWidth name='name'/>
              </div>
              <div className='col'>
              <Input label={'GPS'} type='password' hint={'XW-003OO-3003-302'} fullWidth name='gps'/>
              </div>
            </RowFlexUi>
              <RowFlexUi gap={1} alignItems='flex-start' funcss="margin-top-20">
              <div className='col'>
                <Input label={'Facility Type'} select fullWidth name='fullname'/>
              </div>
              <div className='col'>
              <Input label={'Category'} fullWidth name='phone'/>
              </div>
            </RowFlexUi>
              <RowFlexUi gap={1} alignItems='flex-start' funcss="margin-top-20">
              <div className='col'>
              <Input label={'Region'} select options={get_regions()} fullWidth name='role'/>
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
          <Header title={'Hospital'} uri={'/svg/medicine.svg'} subtitle={'Create and manage all hospitals under your region'}/>
          <Card 
          funcss='roundEdgeSmall padding-20'
          body={
          <TableUI
          funcss='text-small'
          right={<UiButton text={'Create Hospital'} bold bg='primary' startIcon={<PiUser />} onClick={ () => setopen(true) } />}
          data={{
            "data": [],
            "titles": ["Hospital", "Region", "Type", "Category", "GPS"],
            "fields": ["email", "fullname", "role", "position", "position"],
          }}
          />
          }
          />
        
            
        </Content>
    </div>
  )
}

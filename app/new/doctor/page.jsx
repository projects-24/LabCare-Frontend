'use client'
import Content from '@/ui/Content'
import Header from '@/ui/Header'
import Side from '@/ui/sidebar'
import React, { useState } from 'react'
import Card from 'funuicss/ui/card/Card'
import RowFlexUi from '@/ui/RowFlex'
import TextUi from '@/ui/Text'
import UiButton from '@/ui/button'
import { PiPaperPlane, PiPlus, PiTrash, PiUser, PiX } from 'react-icons/pi'
import Input from '@/ui/input'
import SectionUI from '@/ui/section'
import CircleUi from '@/ui/Circle'
import Modal from 'funuicss/ui/modal/Modal'
import TableUI from '@/ui/Table'


export default function Doctor() {
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
                <TextUi text='🩺Doctor' heading='h2' bold color='dark400' block/>
          </div>
          }
          body={
          <div className='container'>
              <RowFlexUi gap={1} alignItems='flex-start' funcss="margin-top-20">
              <div className='col'>
                <Input label={'Name'} hint={'Doctor name'} fullWidth name='name'/>
              </div>
              <div className='col'>
              <Input label={'Facility'} type='text' hint={'Name Of Facility'} fullWidth name='gps'/>
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
          <Header subtitle={'Create and manage reference doctors'} title={'Reference Doctor'} uri={'/svg/doctor.svg'}/>
          <Card 
          funcss='roundEdgeSmall padding-20'
          body={
          <TableUI
          funcss='text-small'
          right={<UiButton text={'Doctor'} bold bg='primary' startIcon={<PiPlus />} onClick={ () => setopen(true) } />}
          data={{
            "data": [],
            "titles": ["Doctor", "Facility", "Created"],
            "fields": ["name", "fullname", "created"],
          }}
          />
          }
          />
        
            
        </Content>
    </div>
  )
}

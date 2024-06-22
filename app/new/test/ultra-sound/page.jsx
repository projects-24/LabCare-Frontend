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


export default function UltralSound() {
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
                <TextUi text='🩺Ultral Sound Test' heading='h2' bold color='dark400' block/>
          </div>
          }
          body={
          <div className='container'>
              <RowFlexUi gap={1} alignItems='flex-start' funcss="margin-top-20">
              <div className='col'>
                <Input label={'Name'} hint={'Ultral Sound Test name'} fullWidth name='name'/>
              </div>
              <div className='col'>
              <Input label={'Department'} type='text' select fullWidth name='department'/>
              </div>
            </RowFlexUi>
              <RowFlexUi gap={1} alignItems='flex-start' funcss="margin-top-20">
              <div className='col'>
                <Input label={'Cost'} hint={'GHC'} type='number' fullWidth name='cost'/>
              </div>
              <div className='col'>
              <Input label={'NHIL'} type='number' hint={'GHC'} fullWidth name='nhil'/>
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
          <Header title={'Ultral Sound Test'} subtitle={'Create and manage all ultra-sound test.'}/>
          <Card 
          funcss='roundEdgeSmall padding-20'
          body={
          <TableUI
          funcss='text-small'
          right={<UiButton text={'Ultral Sound Test'} bold bg='primary' startIcon={<PiPlus />} onClick={ () => setopen(true) } />}
          data={{
            "data": [],
            "titles": ["Test", "Department", 'Cost', 'NHIL',  "Created"],
            "fields": ["test", "department", 'cost', 'nhil', "created"],
          }}
          />
          }
          />
        
            
        </Content>
    </div>
  )
}

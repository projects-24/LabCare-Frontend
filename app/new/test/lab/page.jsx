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
                <TextUi text='🩺Lab Test' heading='h2' bold color='dark400' block/>
          </div>
          }
          body={
          <div className='container'>
              <RowFlexUi gap={1} alignItems='flex-start' funcss="margin-top-20">
              <div className='col'>
                <Input label={'Test'} hint={'Test Name'} fullWidth name='name'/>
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
              <RowFlexUi gap={1} alignItems='flex-start' funcss="margin-top-20">
              <div className='col'>
                <Input label={'G-DRG Code'} hint={'DR-00392-23'} type='number' fullWidth name='code'/>
              </div>
              <div className='col'>
              <Input label={'Rank'} type='number' hint={'1'} fullWidth name='rank'/>
              </div>
            </RowFlexUi>
              <RowFlexUi gap={1} alignItems='flex-start' funcss="margin-top-20">
              <div className='col'>
                <Input label={'Method'}  type='number' select fullWidth name='method'/>
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
          <Header title={'Lab Test'} subtitle={'Create and manage all ultra-sound test.'}/>
          <Card 
          funcss='roundEdgeSmall padding-20'
          body={
          <TableUI
          funcss='text-small'
          right={<UiButton text={'Lab Test'} bold bg='primary' startIcon={<PiPlus />} onClick={ () => setopen(true) } />}
          data={{
            "data": [],
            "titles": ["Test", "Department", 'Cost', 'NHIL', 'G-DRG Code', 'Rank', 'Method',"Created"],
            "fields": ["test", "department", 'cost', 'nhil', "created"],
          }}
          />
          }
          />
        
            
        </Content>
    </div>
  )
}

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
import Link from 'next/link'


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
          <Header title={'Department'} subtitle="Select the department you want to create the for and also view all the records for that department."/>
          <div>
            <RowFlexUi gap={1}>
             <div className="col">
             <Link href={'/new/test/ultra-sound'}>
                <div className="card padding-30 roundEdgeSmall">
                    <TextUi text='Test' color='primary' bold size='small'/>
                    <TextUi text='Ultra Sound' size='big' block/>
                </div>
                </Link>
             </div>
             <div className="col">
                <Link href={'/new/test/lab'}>
                <div className="card padding-30 roundEdgeSmall">
                    <TextUi text='Test' color='primary' bold size='small'/>
                    <TextUi text='Lab Test' size='big' block/>
                </div>
                </Link>
            </div>
            </RowFlexUi>
          </div>

        </Content>
    </div>
  )
}

import Content from '@/ui/Content'
import Header from '@/ui/Header'
import Side from '@/ui/sidebar'
import React from 'react'
import Card from 'funuicss/ui/card/Card'
import RowFlexUi from '@/ui/RowFlex'
import TextUi from '@/ui/Text'
import UiButton from '@/ui/button'
import { PiPaperPlane } from 'react-icons/pi'
import Input from '@/ui/input'
import SectionUI from '@/ui/section'

export default function Branch() {
  return (
    <div>
        <Side />
        <Content>
          <Header />

          <Card 
          funcss='roundEdgeSmall padding-20'
          header={
            <div>
              <RowFlexUi gap={1} justify='space-between'>
                <div>
                  <TextUi text='Setup'/>
                  <TextUi text='Branch' heading='h4' bold color='dark400' block/>
                </div>
                <div>
                  <UiButton text={'Submit'} bold bg='primary' endIcon={<PiPaperPlane />}/>
                </div>
              </RowFlexUi>
            </div>
          }
          body={
            <div>
              <RowFlexUi gap={1} alignItems='flex-start'>
                <div className='col'>
                  <Input label={'Branch'} hint={'Branch Name'} fullWidth id='branch'/>
                  <SectionUI gap={1}/>
                  <Input label={'Region'} select
    options={[
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
  } fullWidth id='branch'/>
                </div>
                <div className='col'>
                  <Input label={'Address'} hint={'Enter Address'} fullWidth multiline rows={5}/>
                </div>
              </RowFlexUi>
            </div>
          }
          />
            
        </Content>
    </div>
  )
}

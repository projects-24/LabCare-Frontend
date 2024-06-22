import Content from '@/ui/Content'
import Header from '@/ui/Header'
import Side from '@/ui/sidebar'
import React from 'react'
import Card from 'funuicss/ui/card/Card'
import RowFlexUi from '@/ui/RowFlex'
import TextUi from '@/ui/Text'
import UiButton from '@/ui/button'
import { PiPaperPlane, PiTrash } from 'react-icons/pi'
import Input from '@/ui/input'
import SectionUI from '@/ui/section'
import CircleUi from '@/ui/Circle'


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
export default async function Branch() {

  const Submit = async (data) => {
    "use server"
    let branch, region 
    branch = data.get('branch')
    region = data.get('region')
    
  }


  
  return (
    <div>
        <Side />
        <Content>
          <Header title={'Branch'}/>
          <form action={Submit}>
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
                  <UiButton type='submit' text={'Submit'} bold bg='primary' endIcon={<PiPaperPlane />}/>
                </div>
              </RowFlexUi>
            </div>
          }
          body={
              <RowFlexUi gap={1} alignItems='flex-start'>
                <div className='col'>
                  <Input label={'Branch'} hint={'Branch Name'} fullWidth name='branch'/>
                  <SectionUI gap={1}/>
                  <Input name='region' label={'Region'} select options={get_regions()} fullWidth />
                </div>
                <div className='col'>
                  <Input label={'Address'} hint={'Enter Address'} fullWidth multiline rows={5}/>
                </div>
              </RowFlexUi>
          }
          />
            </form>
            <SectionUI gap={2}/>
            <div className="row">
              <div className="col sm-12 md-4 lg-4 padding">
                <Card funcss='roundEdgeSmall padding-20'>
                  <RowFlexUi gap={0.7} justify='space-between'>
                  <TextUi text='Branch' size='small' bold color='dark400'/>
                  <div>
                    <CircleUi bg='error' size={1.5}>
                      <PiTrash />
                    </CircleUi>
                  </div>
                  </RowFlexUi>
                  <TextUi text='Greater Accra' heading='h4' bold color='dark400' block/>
                </Card>
              </div>
            </div>
            
        </Content>
    </div>
  )
}

'use client'
import React, { useEffect, useState } from 'react'
import Text from 'funuicss/ui/text/Text'
import SectionUI from './section'
import BreadCrumb from 'funuicss/ui/breadcrumb/BreadCrumb'
import RowFlexUi from './RowFlex'
import Link from 'next/link'
import TextUi from './Text'
export default function Header() {
    const [pathname, setpathname] = useState('')
    useEffect(() => {
        let res = window.location.pathname
        setpathname(res.slice(1, res.length).split('/'))
    }, [])
    
  return (
    <div>
        <Text
        text="Branch"
        color='dark200'
        bold
        heading='h2'
        />
        <RowFlexUi>
        <Link href="/" legacyBehavior>
            <TextUi text='Profile' bold color='primary'/>
        </Link>
        {
            pathname &&
            pathname.map((res , index) => (
              <div key={index}>
                <BreadCrumb type={"straight"} />
                  <Link href={`/${res}`} >
                    {res}
                </Link>
              </div>
            ))
        }
     
        </RowFlexUi>
        <SectionUI gap={4}/>
    </div>
  )
}

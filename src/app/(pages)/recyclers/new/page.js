import DivWrapper from '@/components/DivWrapper'
import Foot from '@/components/Foot'
import Form from '@/components/Form'
import Nav from '@/components/Nav'
import React from 'react'

const NewRecycler = () => {
  return (
    <>
        <Nav />
        <DivWrapper title={'Add Recycler'}>
          <Form />
        </DivWrapper>
    </>
  )
}

export default NewRecycler
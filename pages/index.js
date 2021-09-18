import { useState } from 'react'

import Head from 'next/head'

import { postAsync } from '../services/api/fetcher'

import Box from '../components/container/Box'
import Button from '../components/button/Button'
import Input from '../components/input/Input'
import Loading from '../components/loading/Loading'
import Label from '../components/typography/Label'
import Subtitle from '../components/typography/Subtitle'
import TextButton from '../components/typography/TextButton'

const Index = () => {
  const [model, setModel] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const handleSubmit = e => {
    e.preventDefault()
    setIsLoading(true)

    postAsync('http://localhost:3004/residences', model).then(res => {
      if (res.status === 201) e.target.reset()
      setIsLoading(false)
    })
  }

  const handleChange = e => {
    setModel({ ...model, [e.name]: e.value })
  }

  return (
    <>
      <Head>
        <title>Residence Registration</title>
      </Head>
      {isLoading && <Loading />}
      <Box>
        <Subtitle>Residence Registration</Subtitle>
        <form className='space-y-7' onSubmit={handleSubmit}>
          <div className='flex flex-col space-y-1 mt-7'>
            <Label labelFor='CEP'>CEP</Label>
            <Input
              type='text'
              name='CEP'
              placeholder='Ex: 88015-420'
              className='text-black-75'
              onChange={handleChange}
              value={model.CEP}
            />
          </div>
          <div className='flex flex-col space-y-1'>
            <Label labelFor='Number'>Number</Label>
            <Input
              type='text'
              name='Number'
              placeholder='Ex: 810'
              className='text-black-75'
              onChange={handleChange}
              value={model.Number}
            />
          </div>
          <div className='flex flex-col space-y-1'>
            <Label labelFor='Number'>Latitude</Label>
            <Input
              type='text'
              name='Latitude'
              placeholder='Ex: -48.5457307'
              className='text-black-75'
              onChange={handleChange}
              value={model.Latitude}
            />
          </div>
          <div className='flex flex-col space-y-1'>
            <Label labelFor='Number'>Longitude</Label>
            <Input
              type='text'
              name='Longitude'
              placeholder='Ex: -27.59022'
              className='text-black-75'
              onChange={handleChange}
              value={model.Longitude}
            />
          </div>
          <div className='flex flex-col space-y-1'>
            <Label labelFor='Number'>Number of residents</Label>
            <Input
              type='text'
              name='Residents'
              placeholder='Ex: 4'
              className='text-black-75'
              onChange={handleChange}
              value={model.Residents}
            />
          </div>
          <Button
            type='submit'
            className='bg-primary rounded rounded-md hover:bg-primary-hover w-full p-2'
          >
            <TextButton size={1} className='text-white-75'>
              Save
            </TextButton>
          </Button>
        </form>
      </Box>
    </>
  )
}

export default Index

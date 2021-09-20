import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Head from 'next/head'

import { postAsync } from '../services/api/fetcher'

import Box from '../components/container/Box'
import Button from '../components/button/Button'
import Input from '../components/input/Input'
import Loading from '../components/loading/Loading'
import Subtitle from '../components/typography/Subtitle'
import TextButton from '../components/typography/TextButton'

const Index = () => {
  const [model, setModel] = useState({
    CEP: '',
    Number: '',
    Longitude: '',
    Latitude: '',
    Residents: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()

  const onSubmit = data => {
    setIsLoading(true)

    postAsync('http://localhost:3004/residences', model).then(res => {
      // if (res.status === 201) e.target.reset()
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
        <form className='space-y-7' onSubmit={handleSubmit(onSubmit)}>
          <div className='space-y-1 mt-7'>
            <Input
              label='CEP'
              type='text'
              name='CEP'
              placeholder='Ex: 88.015-420'
              className='text-black-75'
              onChange={handleChange}
              value={model.CEP}
              register={register}
            />
            {errors.CEP?.type === 'required' && (
              <small className='text-red-75'>CEP is required.</small>
            )}
          </div>
          <div className='space-y-1'>
            <Input
              label='Number'
              type='text'
              name='Number'
              placeholder='Ex: 810'
              className='text-black-75'
              onChange={handleChange}
              value={model.Number}
              register={register}
            />
            {errors.Number?.type === 'required' && (
              <small className='text-red-75'>Number is required.</small>
            )}
          </div>
          <div className='space-y-1'>
            <Input
              label='Latitude'
              type='text'
              name='Latitude'
              placeholder='Ex: -48.5457307'
              className='text-black-75'
              onChange={handleChange}
              value={model.Latitude}
              register={register}
            />
            {errors.Latitude?.type === 'required' && (
              <small className='text-red-75'>Latitude is required.</small>
            )}
          </div>
          <div className='space-y-1'>
            <Input
              label='Longitude'
              type='text'
              name='Longitude'
              placeholder='Ex: -27.59022'
              className='text-black-75'
              onChange={handleChange}
              value={model.Longitude}
              register={register}
            />
            {errors.Longitude?.type === 'required' && (
              <small className='text-red-75'>Longitude is required.</small>
            )}
          </div>
          <div className='space-y-1'>
            <Input
              label='Number of residents'
              type='text'
              name='Residents'
              placeholder='Ex: 4'
              className='text-black-75'
              onChange={handleChange}
              value={model.Residents}
              register={register}
            />
            {errors.Residents?.type === 'required' && (
              <small className='text-red-75'>Residents is required.</small>
            )}
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

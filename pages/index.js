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
  const { register, handleSubmit, watch, errors } = useForm()

  // const onSubmit = e => {
  //   e.preventDefault()
  //   setIsLoading(true)

  //   postAsync('http://localhost:3004/residences', model).then(res => {
  //     if (res.status === 201) e.target.reset()
  //     setIsLoading(false)
  //   })
  // }

  const onSubmit = data => {
    console.log(data)
  }

  const handleChange = e => {
    setModel({ ...model, [e.name]: e.value })
  }

  useEffect(() => {
    console.log(errors)
  }, [model])

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
              required={true}
              type='text'
              name='CEP'
              placeholder='Ex: 88.015-420'
              className='text-black-75'
              onChange={handleChange}
              value={model.CEP}
              inputRef={register('CEP', { required: true })}
            />
            {errors.CEP?.type === 'required' && (
              <small className='text-red-75'>CEP is required.</small>
            )}
          </div>
          <div className='space-y-1'>
            <Input
              label='Number'
              required={true}
              type='text'
              name='Number'
              placeholder='Ex: 810'
              className='text-black-75'
              onChange={handleChange}
              value={model.Number}
              inputRef={register('Number', { required: true })}
            />
            {errors.Number?.type === 'required' && (
              <small className='text-red-75'>Number is required.</small>
            )}
          </div>
          <div className='space-y-1'>
            <Input
              label='Latitude'
              required={true}
              type='text'
              name='Latitude'
              placeholder='Ex: -48.5457307'
              className='text-black-75'
              onChange={handleChange}
              value={model.Latitude}
              inputRef={register('Latitude', { required: true })}
            />
            {errors.Latitude?.type === 'required' && (
              <small className='text-red-75'>Latitude is required.</small>
            )}
          </div>
          <div className='space-y-1'>
            <Input
              label='Longitude'
              required={true}
              type='text'
              name='Longitude'
              placeholder='Ex: -27.59022'
              className='text-black-75'
              onChange={handleChange}
              value={model.Longitude}
              inputRef={register('Longitude', { required: true })}
            />
            {errors.Longitude?.type === 'required' && (
              <small className='text-red-75'>Longitude is required.</small>
            )}
          </div>
          <div className='space-y-1'>
            <Input
              label='Number of residents'
              required={true}
              type='text'
              name='Residents'
              placeholder='Ex: 4'
              className='text-black-75'
              onChange={handleChange}
              value={model.Residents}
              inputRef={register('Residents', { required: true })}
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

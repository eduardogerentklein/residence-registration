import Box from '../components/container/Box'
import Button from '../components/button/Button'
import Input from '../components/input/Input'
import Label from '../components/typography/Label'
import Subtitle from '../components/typography/Subtitle'
import TextButton from '../components/typography/TextButton'

const Index = () => {
  return (
    <Box>
      <Subtitle>Residence Registration</Subtitle>
      <form className='space-y-5'>
        <div className='flex flex-col mt-5'>
          <Label labelFor='CEP'>CEP</Label>
          <Input
            type='text'
            name='CEP'
            id='CEP'
            placeholder='Ex: 88015-420'
            className='text-black-75'
          />
        </div>
        <div className='flex flex-col'>
          <Label labelFor='Number'>Number</Label>
          <Input
            type='text'
            name='Number'
            id='Number'
            placeholder='Ex: 810'
            className='text-black-75'
          />
        </div>
        <div className='flex flex-col'>
          <Label labelFor='Number'>Latitude</Label>
          <Input
            type='text'
            name='Latitude'
            id='Latitude'
            placeholder='Ex: -48.5457307'
            className='text-black-75'
          />
        </div>
        <div className='flex flex-col'>
          <Label labelFor='Number'>Longitude</Label>
          <Input
            type='text'
            name='Longitude'
            id='Longitude'
            placeholder='Ex: -27.59022'
            className='text-black-75'
          />
        </div>
        <div className='flex flex-col'>
          <Label labelFor='Number'>Number of residents</Label>
          <Input
            type='text'
            name='residents'
            id='residents'
            placeholder='Ex: 4'
            className='text-black-75'
          />
        </div>
        <div>
          <Button className='bg-primary w-full p-2'>
            <TextButton size={1} className='text-white-75'>
              Save
            </TextButton>
          </Button>
        </div>
      </form>
    </Box>
  )
}

export default Index

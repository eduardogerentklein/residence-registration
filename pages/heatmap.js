import Head from 'next/head'

import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

import Box from '../components/container/Box'
import Subtitle from '../components/typography/Subtitle'

const HeatMap = () => {
  const Map = ReactMapboxGl({
    accessToken: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_KEY
  })

  return (
    <>
      <Head>
        <title>Heat Map</title>
      </Head>
      <Box>
        <Subtitle>Heat map</Subtitle>
        <Map
          style='mapbox://styles/mapbox/streets-v9'
          containerStyle={{
            height: '50vh',
            width: '50vw'
          }}
        >
          <Layer
            type='symbol'
            id='marker'
            layout={{ 'icon-image': 'marker-15' }}
          >
            <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
          </Layer>
        </Map>
      </Box>
    </>
  )
}

export default HeatMap

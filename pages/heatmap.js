import { useEffect, useState } from 'react'
import Head from 'next/head'
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

import { getAsync } from '../services/api/fetcher'

import Box from '../components/container/Box'
import Loading from '../components/loading/Loading'
import Subtitle from '../components/typography/Subtitle'

const HeatMap = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [residences, setResidences] = useState([])

  const Map = ReactMapboxGl({
    accessToken: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_KEY
  })

  useEffect(() => {
    setIsLoading(true)

    getAsync('/residences').then(async res => {
      if (res.ok) {
        const data = await res.json()
        data.map(item => {
          setResidences([...residences, [item.Latitude, item.Longitude]])
        })
      }
      setIsLoading(false)
    })
  }, [])

  return (
    <>
      <Head>
        <title>Residences - Heat Map</title>
      </Head>
      {isLoading && <Loading />}
      <Box className='h-96'>
        <Subtitle>Heat map</Subtitle>
        <Map style='mapbox://styles/mapbox/streets-v9'>
          <Layer
            type='symbol'
            id='marker'
            layout={{ 'icon-image': 'marker-15' }}
          >
            <Feature coordinates={residences} />
          </Layer>
        </Map>
        <style global jsx>
          {`
            .mapboxgl-canvas {
              height: 100% !important;
              width: 100% !important;
            }

            .mapboxgl-map {
              position: inherit;
            }
          `}
        </style>
      </Box>
    </>
  )
}

export default HeatMap

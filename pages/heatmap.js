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

  // It's ok to expose this token because that's a public API.
  // Anyway, if you don't want to expose that, you can put it into an environment file.
  // Expose environment variables to the browser by prefixing with 'NEXT_PUBLIC_'.
  const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1IjoiZWR1YXJkb2tsZWluIiwiYSI6ImNrdHRhMzlhcDFlamcycG8xM2FlZWJlcHIifQ.N2CBio3_E_lQi0J-E0Cp_Q'
  })

  useEffect(() => {
    setIsLoading(true)

    getAsync('/residences').then(async res => {
      if (res.ok) {
        const data = await res.json()
        data.map(item => {
          setResidences([...residences, item])
        })
      }
      setIsLoading(false)
    })
  }, [])

  const layerPaint = {
    'heatmap-weight': {
      property: 'Residents',
      type: 'exponential',
      stops: [
        [0, 0],
        [5, 2]
      ]
    },
    'heatmap-intensity': {
      stops: [
        [0, 0],
        [5, 1.2]
      ]
    },
    'heatmap-color': [
      'interpolate',
      ['linear'],
      ['heatmap-density'],
      0,
      'rgba(33,102,172,0)',
      0.25,
      'rgb(103,169,207)',
      0.5,
      'rgb(209,229,240)',
      0.8,
      'rgb(253,219,199)',
      1,
      'rgb(239,138,98)',
      2,
      'rgb(178,24,43)'
    ],
    'heatmap-radius': {
      stops: [
        [0, 1],
        [5, 50]
      ]
    }
  }

  const center = [-48.5457307, -27.59022]

  const mapStyle = {
    flex: 1
  }

  return (
    <>
      <Head>
        <title>Residences - Heat Map</title>
      </Head>
      {isLoading && <Loading />}
      <Box className='mapbox-box-height'>
        <Map
          style='mapbox://styles/mapbox/dark-v9'
          center={center}
          containerStyle={mapStyle}
        >
          <Layer type='heatmap' paint={layerPaint}>
            {residences.map((el, index) => {
              return (
                <Feature
                  key={index}
                  coordinates={[el.Latitude, el.Longitude]}
                  properties={el}
                />
              )
            })}
          </Layer>
        </Map>
        <style global jsx>
          {`
            .mapboxgl-canvas {
              height: 100% !important;
              width: 100% !important;
              border-radius: 0.5rem;
            }

            .mapboxgl-map {
              position: inherit;
            }

            .mapbox-box-height {
              height: 75vh;
            }
          `}
        </style>
      </Box>
    </>
  )
}

export default HeatMap

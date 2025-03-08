import { useState } from 'react'
import Banner from './components/Banner'
import Collage from './components/Collage'

function App() {

  return (
    <>
      <Banner />
      <Collage
        name="Central Bath"
        photoCollection={import.meta.glob('/src/assets/trip-photos/bath/central-bath/*.jpeg')}
      />
      <Collage
        name="Roman Baths"
        photoCollection={import.meta.glob('/src/assets/trip-photos/bath/roman-baths/*.jpeg')}
      />
      <Collage
        name="Dunraven Bay"
        photoCollection={import.meta.glob('/src/assets/trip-photos/wales/dunraven-bay/*.jpeg')}
      />
      <Collage
        name="Cardiff"
        photoCollection={import.meta.glob('/src/assets/trip-photos/wales/cardiff/*.jpeg')}
      />
      <Collage
        name="London"
        photoCollection={import.meta.glob('/src/assets/trip-photos/london/*.jpeg')}
      />
      <Collage
        name="Natural History Museum"
        photoCollection={import.meta.glob('/src/assets/trip-photos/london/natural-history-museum/*.jpeg')}
      />
      <Collage
        name="British Museum"
        photoCollection={import.meta.glob('/src/assets/trip-photos/london/british-museum/*.jpeg')}
      />
    </>
  )
}

export default App

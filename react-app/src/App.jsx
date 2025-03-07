import { useState } from 'react'
import Banner from './components/Banner'
import Collage from './components/Collage'

function App() {

  return (
    <>
      <Banner />
      {/* <Collage
        name="Test"
        photoCollection={import.meta.glob('/src/assets/trip-photos/test/*')}
      /> */}
      <Collage
        name="Central Bath"
        photoCollection={import.meta.glob('/src/assets/trip-photos/bath/central-bath/*.jpeg', {eager: true})}
      />
      <Collage
        name="Roman Baths"
        photoCollection={import.meta.glob('/src/assets/trip-photos/bath/roman-baths/*.jpeg', {eager: true})}
      />
      <Collage
        name="Dunraven Bay"
        photoCollection={import.meta.glob('/src/assets/trip-photos/wales/dunraven-bay/*.jpeg', {eager: true})}
      />
      <Collage
        name="Cardiff"
        photoCollection={import.meta.glob('/src/assets/trip-photos/wales/cardiff/*.jpeg', {eager: true})}
      />
      <Collage
        name="London"
        photoCollection={import.meta.glob('/src/assets/trip-photos/london/*.jpeg', {eager: true})}
      />
      <Collage
        name="Natural History Museum"
        photoCollection={import.meta.glob('/src/assets/trip-photos/london/natural-history-museum/*.jpeg', {eager: true})}
      />
      <Collage
        name="British Museum"
        photoCollection={import.meta.glob('/src/assets/trip-photos/london/british-museum/*.jpeg', {eager: true})}
      />
    </>
  )
}

export default App

import { useState } from 'react'
import Banner from './components/Banner'
import Gallery from './components/Gallery'
import Categories from './components/Categories'

function App() {

  const [category, setCategory] = useState("all");
  console.log(category);

  return (
    <>
      <Banner />
      <Categories setCategory={setCategory} />
      <Gallery category={category} />
    </>
  )
}

export default App

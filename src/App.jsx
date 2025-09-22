import './App.css'
import { Suspense } from 'react'
import Bottles from './components/Bottles/Bottles'

const bottlesPromise = fetch('./bottle.json')
.then(res => res.json())

function App() {

  return (
    <>
      <h1>By Awesome Water Bottle</h1>
      <Suspense fallback={<h3>Bottles are loading......</h3>}>
        <Bottles bottlesPromise={bottlesPromise}></Bottles>
      </Suspense>
    </>
  )
}

export default App

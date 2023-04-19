import './App.css'
import React, { lazy, Suspense } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import AppNavBar from './Component/Navbar/AppNavBar'
import Lodging from './Component/lodging/Lodging'
import SingleRespies from './Page/SingleRespies/SingleRespies'
import RespiesDetails from './Page/RespiesDetails/RespiesDetelals'
const Recipes = lazy(() => import('./Page/Recipes/Recipes'))
const NotFound = lazy(() => import('./Component/NotFond/NotFound'))
const FoodCatagories = lazy(() => import('./Page/Food/FoodCatagories'))

const About = lazy(() => import('./Page/About/About'))
const BackgroundVideo = lazy(() =>
  import('./Component/BackgroundVideo/BackgroundVideo ')
)

function App () {
  return (
    <div className='app'>
      <Suspense fallback={<Lodging />}>
        <AppNavBar />
        <BackgroundVideo />

        <Routes>
          <Route index element={<FoodCatagories />} />

          <Route path='/About' element={<About />} />
          <Route path='/Recipes' element={<Recipes />} />
          <Route path='/Single' element={<SingleRespies />} />
          <Route path='/detail/:id' element={<RespiesDetails />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App

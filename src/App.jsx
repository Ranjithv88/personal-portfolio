import React, { Suspense, useEffect, useRef } from 'react'
import './App.scss'
import Loading from './components/Loading'

const HomePage = React.lazy(() => import('./HomePage'))

function App() {
 return(
  <div className='App'>
    <Suspense fallback={<Loading />}>
      <HomePage />
    </Suspense>
  </div>
 )
}

export default App


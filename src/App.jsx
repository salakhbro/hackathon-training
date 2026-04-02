import React from 'react'
import Jasurbek from './pages/Jasurbek/Jasurbek'
import Mirshoxid from './pages/Mirshoxid/Mirshoxid'
import Muhammadsoli from './pages/Muhammadsoli/Muhammadsoli'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
        <Routes>
            <Route path='/jasurbek' element={<Jasurbek />}/>
            <Route path='/mirshoxid' element={<Mirshoxid />}/>
            <Route path='/muhammadsoli' element={<Muhammadsoli />}/>
        </Routes>
    </div>
  )
}

export default App

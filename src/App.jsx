import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './Components/SignUp'
import SignIn from './Components/SignIn'
import MainLayout from './Components/MainLayout'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignUp/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='/signin' element={<SignIn/>}></Route>
          <Route path='/admin' element={<MainLayout/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
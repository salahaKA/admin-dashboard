import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './Components/SignUp'
import SignIn from './Components/SignIn'
import MainLayout from './Components/MainLayout'
import useThemeStore from './Components/themeStore'
import { ConfigProvider, theme as antdtheme} from 'antd'


const App = () => {

  const {theme} = useThemeStore();
  return (
    <ConfigProvider theme= {{ algorithm: theme=== "dark"? antdtheme.darkAlgorithm: antdtheme.defaultAlgorithm,}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignUp/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='/signin' element={<SignIn/>}></Route>
          <Route path='/admin' element={<MainLayout/>}></Route>
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  )
}

export default App
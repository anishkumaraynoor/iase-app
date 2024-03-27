import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Work from './pages/Work'
import Data from './pages/Data'


function App() {

  return (
    <>
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/data' element={<Data></Data>}></Route>
      <Route path='/tc' element={<Work></Work>}></Route>
      <Route path='/*' element={<Navigate to={'/'}></Navigate>} ></Route>
    </Routes>
    </>
  )
}

export default App

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import MainRoute from './auth/routes/MainRoute'
import MenSection from './auth/pages/men-section/MenSection'
import Home from './auth/pages/home/Home'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainRoute/>}>
        <Route path='/' element={<Home/>} />
        <Route path='/men' element={<MenSection/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App

import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { HomePage } from './pages/HomePage'
import { ProvaPage } from './pages/ProvaPage'

function App() {

  return (
    <Routes>
      <Route path="/" element={<DefaultLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="/category" element={<ProvaPage/>}/>
        <Route index element={<HomePage/>}/>
      </Route>
    </Routes>
  )
}

export default App

import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { HomePage } from './pages/HomePage'
import { CategoriesPage } from './pages/CategoriesPage'

function App() {

  return (
    <Routes>
      <Route path="api" element={<DefaultLayout/>}>
        <Route path="movies" element={<HomePage/>}/>
        <Route path="categories" element={<CategoriesPage/>}/>
      </Route>
    </Routes>
  )
}

export default App

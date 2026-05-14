import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { MoviesPage } from './pages/MoviesPage'
import { MoviesShowPage } from './pages/MoviesShowPage'
import { CategoriesPage } from './pages/CategoriesPage'
import { CategoriesShowPage } from './pages/CategoriesShowPage'

function App() {

  return (
    <Routes>
      <Route path="/" element={<DefaultLayout/>}>
        <Route path="movies" element={<MoviesPage/>}/>
        <Route path="movies/:id" element={<MoviesShowPage/>}/>
        <Route path="categories" element={<CategoriesPage/>}/>
        <Route path="categories/:id" element={<CategoriesShowPage/>}/>
      </Route>
    </Routes>
  )
}

export default App

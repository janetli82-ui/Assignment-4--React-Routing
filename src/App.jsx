import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Stars from "./pages/Stars"
import Movies from "./pages/Movies"
import Gallery from "./pages/Gallery"
import About from "./pages/About"
import Layout from "./components/Layout"
import StarsList from "./pages/StarsList"
import MoviesList from "./pages/MoviesList"
import './index.css'

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/stars" element={<Stars />} >
            <Route path=":name" element={<StarsList />} />
          </Route>
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:title/:year" element={<MoviesList />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </>
  )
}

export default App

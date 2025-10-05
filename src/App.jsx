import './App.css'
import { BrowserRouter } from 'react-router'
import { Footer } from './components/Footer'
import { Motion } from './components/Motion'
import { Navbar } from './components/Navbar'
import { Portfolio } from './components/Portfolio'
import { Specialties } from './components/Specialties'
import { Welcome } from './components/Welcome'

function App() {
  return (
    <>
      <div className="container p-3">
        <BrowserRouter>
        <Navbar />
        <Welcome />

        <Motion>
          <Specialties />
        </Motion>

        <Motion>
          <Portfolio />
        </Motion>

        <Motion>
          <Footer />
        </Motion>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App

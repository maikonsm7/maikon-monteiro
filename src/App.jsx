import './App.css'
import { BrowserRouter } from 'react-router'
import { Footer } from './components/Footer'
import { Motion } from './components/Motion'
import { Navbar } from './components/Navbar'
import { Portfolio } from './components/Portfolio'
import { Specialties } from './components/Specialties'
import { Welcome } from './components/Welcome'
import { useRef } from "react"

function App() {
  const specialties = useRef(null)
  const portfolio = useRef(null)

  const scrollToDiv = ref => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <div className="container p-3">
        <BrowserRouter>
        <Navbar
        goSpecialties={() => scrollToDiv(specialties)}
        goPortfolio={() => scrollToDiv(portfolio)}
        />
        <Welcome />

        <Motion>
          <Specialties ref={specialties}/>
        </Motion>

        <Motion>
          <Portfolio ref={portfolio}/>
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

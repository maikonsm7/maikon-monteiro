import './App.css'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Portfolio } from './components/Portfolio'
import { Specialties } from './components/Specialties'
import { Welcome } from './components/Welcome'

function App() {

  return (
    <>
    <div className="container p-3">
     <Navbar />
     <Welcome />
     <Specialties />
     <Portfolio />
     <Footer />
    </div>
    </>
  )
}

export default App

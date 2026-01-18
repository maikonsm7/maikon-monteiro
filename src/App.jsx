import './App.css'
import { BrowserRouter } from 'react-router'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Portfolio } from './components/Portfolio'
import { Specialties } from './components/Specialties'
import { Welcome } from './components/Welcome'
import { useRef, useEffect } from "react"

function App() {
  const specialties = useRef(null)
  const portfolio = useRef(null)
  const offset = 62;

  const scrollToDiv = ref => {
    const top = ref.current.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' })
  }

  useEffect(() => {
    const sections = document.querySelectorAll('.fade-in-section');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Se quiser que apareça só uma vez:
          observer.unobserve(entry.target);
        }
      })
    }, {
      threshold: 0.2 // quando 20% da div estiver visível, ativa o efeito
    })

    sections.forEach(section => {
      observer.observe(section)
    })
  }, [])

  return (
    <>
      <div className="container p-3">
        <BrowserRouter>
          <Navbar
            goSpecialties={() => scrollToDiv(specialties)}
            goPortfolio={() => scrollToDiv(portfolio)}
          />
          <Welcome />
          <Specialties ref={specialties} />
          <Portfolio ref={portfolio} />
          <Footer />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Experience from './pages/Experience'
import Skills from './pages/Skills'
import Contact from './pages/Contact'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Home />
        <Projects />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App

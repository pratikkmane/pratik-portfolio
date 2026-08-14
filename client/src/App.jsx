import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import VoiceAssistant from './components/VoiceAssistant'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Home />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <VoiceAssistant />
    </>
  )
}

export default App

import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
 

  return (
    <main className='bg-slate-700 text-gray-400'>
      <Navbar/>
      <About/>
      <Projects/>
      <Skills/>
      <Testimonials/>
      <Contact/>
      <Footer/>
     
    </main>
  )
}

export default App

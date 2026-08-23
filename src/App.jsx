import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './sections/Hero/Hero'
import About from './sections/About/About'
import Experience from './sections/Experience/Experience'
import Education from './sections/Education/Education'
import Projects from './sections/Projects/Projects'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="app">
      <Navbar/>
      <main>
        <Hero/>
        <About/>
        <Experience/>
        <Education/>
        <Projects/>
      </main>
      <Footer/>
    
    
    </div>
    
    
  )
}

export default App
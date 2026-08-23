import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './sections/Hero/Hero'
import About from './sections/About/About'
import Experience from './sections/Experience/Experience'
import Education from './sections/Education/Education'

function App() {
  return (
    <div className="app">
      <Navbar/>
      <main>
        <Hero/>
        <About/>
        <Experience/>
        <Education/>
      </main>
    
    
    
    </div>
    
    
  )
}

export default App
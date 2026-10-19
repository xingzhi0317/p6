import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

// Lifted data: App owns the projects, children receive them as props
const projects = [
  {
    id: 1, title: 'BTC prediction', category: 'frontend', categoryLabel: 'Frontend', featured: true,
    description: 'It based on news and historical data to predict the price of BTC in the next 24 hours.',
    tags: ['HTML', 'CSS'], completed: '2025-08-15',
  },
  {
    id: 2, title: 'AI safety research', category: 'webapp', categoryLabel: 'Web App',
    description: 'I study the safety of AI and how to make it more reliable and trustworthy.',
    tags: ['HTML', 'CSS', 'JavaScript'], completed: '2025-09-01',
  },
]

function App() {
  return (
    <div className="portfolio">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects projects={projects} />
      <Contact />
      <Footer projectCount={projects.length} />
    </div>
  )
}

export default App

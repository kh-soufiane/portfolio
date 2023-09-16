import './App.scss'
import Layout from './components/Layout'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Project from './components/Project'
import AddProject from './components/Project/AddProject'
import Experience from './components/Experience'
import Theme from './components/Theme'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="project" element={<Project />} />
          <Route path="new/project" element={<AddProject />} />
          <Route path="experience" element={<Experience />} />
        </Route>
      </Routes>
    </>
  )
}

export default App

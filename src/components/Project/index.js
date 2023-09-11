import { useEffect, useRef, useState } from 'react'
import { auth, db, storage } from '../../firebase'
import './index.scss'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import AnimatedLetters from '../AnimatedLetters/index'
import Loader from 'react-loaders'
import { addDoc, getDocs } from 'firebase/firestore/lite'
import { collection } from 'firebase/firestore/lite'

const Project = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [project, setProject] = useState([])

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  useEffect(() => {
    getProject()
  }, [])

  const getProject = async () => {
    const querySnapshot = await getDocs(collection(db, 'project'))
    setProject(querySnapshot.docs.map((doc) => doc.data()))
  }

  const renderProject = (project) => {
    return (
      <div className="images-container">
        {project.map((port, idx) => {
          return (
            <div className="image-box" key={idx}>
              <img
                src={port.image}
                className="portfolio-image"
                alt="porfolio"
              />
              <div className="content">
                <p className="title">{port.name}</p>
                <h4 className="description">{port.description}</h4>
                <button className="btn" onClick={() => window.open(port.url)}>
                  VIEW
                </button>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className="container project-page">
      <div className="text-zone-full-page">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's', '.']}
            idx={15}
          />
        </h1>
        <div className="projects">{renderProject(project)}</div>
      </div>
    </div>
  )
}

export default Project

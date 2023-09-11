import { Link } from 'react-router-dom'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters/index'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faVuejs,
} from '@fortawesome/free-brands-svg-icons'
import { Loader } from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'u', 's', '.']}
              idx={15}
            />
          </h1>
          <h2 className="subtitle">Who am I ?</h2>
          <p>
            I'm SOUFIANE Khadri a full-stack developer with a strong ambition to
            excel in the field. I'm on the lookout for an opportunity within an
            established IT company where I can work with the latest technologies
            and take on diverse and challenging projects.
          </p>

          <p>
            Over the years, I've undergone significant personal growth, evolving
            my perspective through various life experiences, encounters with
            different people, and visits to many places. This transformation has
            made me more decisive in my actions and relationships with others.
          </p>

          <p>
            I consider myself loyal, open-minded, friendly, and action-oriented.
            In addition to my professional aspirations, I'm also a family
            person, gamer, sport fanatic, and tech enthusiast, constantly
            seeking to improve my skills.
          </p>

          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faVuejs} color="#42B883" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD*!D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About

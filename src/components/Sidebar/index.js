import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import logoS from '../../assets/images/logo-me.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faEnvelope,
  faUser,
  faDashboard,
  faAtom,
} from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faGithub,
  faSkype,
  faDiscord,
} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={logoS} alt="logo" />
      </Link>
      <div className="subtitle-logo-first">SOUFIANE</div>
      <div className="subtitle-logo-second">FULLSTACK ENGINEER</div>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="project-link"
          to="/project"
        >
          <FontAwesomeIcon icon={faDashboard} color="#4d4d4e" />
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          className="experience-link"
          to="/experience"
        >
          <FontAwesomeIcon icon={faAtom} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/soufiane-khadri/">
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://github.com/kh-soufiane">
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="discordapp.com/users/soufianekhadri">
            <FontAwesomeIcon icon={faDiscord} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="skype:live:.cid.289e49ff4b4ce8f3">
            <FontAwesomeIcon icon={faSkype} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar

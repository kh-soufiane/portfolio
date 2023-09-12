import { useEffect, useRef } from 'react'
import './index.scss'

const Logo = () => {
  return (
      <div className="card-container">
        <div className="card">
          <div className="card-title">Software Developer</div>
          <div className="card-description">
            Fullstack development of software and applications in programming
            languages like C#, Java, SQL, etc.
          </div>
        </div>
        <div className="card">
          <div className="card-title">Web Developer</div>
          <div className="card-description">
            Web Development in ASP.NET, .NET Core, C#, Razor, Javascript,
            Bootstrap, CSS, ReactJS
          </div>
        </div>
        <div className="card">
          <div className="card-title">CI- CD</div>
          <div className="card-description">
            Familiar with AWS and azure DevOps, particularly in the realm of
            Continuous Integration and Continuous Deployment (CI/CD)
          </div>
        </div>
        <div className="card">
          <div className="card-title">Web Admin</div>
          <div className="card-description">
            Web administration of your wordpress website (Content Management
            Systems)
          </div>
        </div>
      </div>
  )
}

export default Logo

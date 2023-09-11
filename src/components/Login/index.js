import './index.scss'
import { signInWithCred, signInWithGoogle } from '../../firebase'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useRef, useEffect } from 'react'
import { getAuth } from 'firebase/auth'

const Login = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [user, setUser] = useState(null)
  const refForm = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const login = (e) => {
    e.preventDefault()
    const auth = getAuth()

    const email = refForm.current[0]?.value
    const password = refForm.current[1]?.value

    signInWithCred(email, password)
      .then((userCred) => {
        const newUser = { ...userCred.user }
        newUser.complect = 'Succes'
        newUser.isSignIn = true
        newUser.error = ''
        setUser(newUser)
      })
      .catch((error) => {
        const newUser = { ...user }
        newUser.complect = 'Sign In Failed'
        newUser.isSignIn = false
        setUser(newUser)
      })
  }

  return (
    <div className="container login-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <div className="login-form">
          <form ref={refForm} onSubmit={login}>
            <p>
              <input type="email" name="email" placeholder="Email" required />
            </p>
            <p>
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </p>
            <button className="flat-button" type="submit">
              Submit
            </button>

            <p className="error">{user?.complect}</p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login

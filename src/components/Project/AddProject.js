import { useEffect, useRef, useState } from 'react'
import { auth, db, storage } from '../../firebase'
import './index.scss'
import './addProject.scss'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import AnimatedLetters from '../AnimatedLetters/index'
import Loader from 'react-loaders'
import { addDoc } from 'firebase/firestore/lite'
import { collection } from 'firebase/firestore/lite'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import Login from '../Login/index'

const AddProject = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [user, setUser] = useState(null)
  const authen = getAuth()
  const refForm = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  useEffect(() => {
    onAuthStateChanged(authen, (user) => {
      if (user) {
        setUser(user)
        console.log('Here', user)
      } else {
        setUser(null)
      }
    })
  }, [])

  const submitProject = (e) => {
    e.preventDefault()
    const name = refForm.current[0]?.value
    const description = refForm.current[1]?.value
    const url = refForm.current[2]?.value
    const image = refForm.current[3]?.files[0]

    const storageRef = ref(storage, `project/${image.name}`)

    uploadBytes(storageRef, image).then(
      (snapshot) => {
        getDownloadURL(snapshot.ref).then(
          (downloadUrl) => {
            saveProject({
              name,
              description,
              url,
              image: downloadUrl,
            })
          },
          () => {
            saveProject({
              name,
              description,
              url,
              image: null,
            })
          }
        )
      },
      () => {
        saveProject({
          name,
          description,
          url,
          image: null,
        })
      }
    )

    const saveProject = async (project) => {
      try {
        await addDoc(collection(db, 'project'), project)
        window.location.reload(false)
      } catch (error) {
        alert('Failed to add project')
      }
    }
  }

  const renderForm = () => {
    return (
      <div className="container project-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[
                'A',
                'd',
                'd',
                ' ',
                'P',
                'r',
                'o',
                'j',
                'e',
                'c',
                't',
                '.',
              ]}
              idx={15}
            />
          </h1>

          <div className="project-form">
            <form
              ref={refForm}
              onSubmit={submitProject}
              className="project-form"
            >
              <p>
                <input type="text" placeholder="Name" />
              </p>
              <p>
                <textarea placeholder="Description" />
              </p>
              <p>
                <input type="text" placeholder="Url" />
              </p>
              <p>
                <input
                  className="input-file-uploader"
                  type="file"
                  placeholder="Image"
                />
              </p>
              <button className="flat-button" type="submit">
                Submit
              </button>
            </form>
            <button className="flat-button" onClick={() => auth.signOut()}>
              Sign out
            </button>
          </div>
        </div>
        <div className="tableau"></div>
      </div>
    )
  }

  return (
    <>
      {user ? renderForm() : <Login />}
      <Loader type="pacman" />
    </>
  )
}

export default AddProject

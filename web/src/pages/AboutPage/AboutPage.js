import { Link, routes } from '@redwoodjs/router'
import Picture from './profile-pic.jpg'

const AboutPage = () => {
  return (
    <div>
      <p className="font-medium text-xl text-blue-500">About Page</p>
      <p>I will add something cool here later... I think.</p>

      <div className="">
        <Picture />
      </div>

      <p>
        A link to my{' '}
        <a
          href="https://shared-assets.adobe.com/link/ebb0b225-288a-4d64-4da4-652a2bdd0955"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          Resume
        </a>
        .
      </p>
      <p>
        Take me{' '}
        <Link to={routes.home()} className="text-blue-500">
          Home
        </Link>
        .
      </p>
    </div>
  )
}

export default AboutPage

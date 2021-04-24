import { Link, routes } from '@redwoodjs/router'

import Logo from './mtntpcdng_lg.svg'

import Footer from '../../components/Footer'

const HomePage = () => {
  return (
    <div>
      <Link to="https://mountaintopcoding.dev" className="mx-6 my-6">
        <Logo />
      </Link>

      <p className="font-semibold text-5xl w-1/2 justify-center mx-auto">
        Hello, I am <span className="text-blue-500">Isaac Tait</span> - a
        Jamstack web developer.
      </p>

      <div className="mt-8 mb-8 mx-4 flex flex-row justify-between">
        <p>
          Check out the&nbsp;
          <Link to={routes.about()} className="text-blue-500">
            About
          </Link>
          &nbsp;page (you should totally visit it).
        </p>
        <p>
          Check out the original{' '}
          <code>
            mountainTopCoding(
            <span role="img" aria-label="mountain with snow-cap">
              &#127956;
            </span>
            );
          </code>
          <a
            href="https://mountaintopcoding.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:bg-blue-500 hover:text-white"
          >
            here
          </a>
          .
        </p>
      </div>

      <div className="grid grid-cols-4 gap-4 heropattern-topography-blue-500 pb-2">
        <div className="box-content h-32 w-32 p-4"></div>
        <div className="box-content h-32 w-32 p-4"></div>
        <div className="box-content h-32 w-32 p-4 mr-8 mt-2 border-4 rounded-full"></div>
        <div className="box-content h-32 w-32 p-4"></div>
        <div className="box-content h-32 w-32 p-4 ml-12 border-4 rounded-full"></div>
        <div className="box-content h-32 w-32 p-4"></div>
        <div className="box-content h-32 w-32 p-4"></div>
        <div className="box-content h-32 w-32 p-4 border-4 rounded-full ml-12"></div>
        <div className="box-content h-32 w-32 p-4"></div>
        <div className="box-content h-32 w-32 p-4 border-4 rounded-full ml-20"></div>
        <div className="box-content h-32 w-32 p-4"></div>
        <div className="box-content h-32 w-32 p-4"></div>
        <div className="box-content h-32 w-32 p-4 border-4 rounded-full ml-2"></div>
        <div className="box-content h-32 w-32 p-4"></div>
        <div className="box-content h-32 w-32 p-4"></div>
        <div className="box-content h-32 w-32 p-4 border-4 rounded-full mr-12"></div>
      </div>
      <hr />
      <Footer />
    </div>
  )
}

export default HomePage

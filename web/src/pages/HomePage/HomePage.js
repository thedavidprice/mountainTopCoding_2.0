import { Link, routes } from '@redwoodjs/router'

import Logo from './mtntpcdng_lg.svg'
import Footer from '../../components/Footer'

const HomePage = () => {
  return (
    <div>
      <Link to="https://mountaintopcoding.dev" className="mx-6 my-6">
        <Logo />
      </Link>

      <p className="font-semibold text-xl md:text-5xl w-1/2 justify-center mx-auto">
        Hello, I am <span className="text-blue-500">Isaac Tait</span> - a
        Jamstack web developer.
      </p>

      <div className="my-4 mx-4 text-xs md:text-base">
        <p>
          _&nbsp;
          <Link
            to={routes.about()}
            className="text-blue-500 hover:bg-blue-500 hover:text-white"
          >
            About
          </Link>
        </p>
        <p>
          _&nbsp;The OG{' '}
          <a
            href="https://mountaintopcoding.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:bg-blue-500 hover:text-white"
          >
            <code>
              mountainTopCoding(
              <span role="img" aria-label="mountain with snow-cap">
                &#127956;
              </span>
              );
            </code>
          </a>
        </p>
      </div>

      <div className="grid grid-cols-3 gap-2 md:grid-cols-4 md:gap-4 heropattern-topography-blue-500 pb-2">
        <div className="box-content h-12 w-12 md:h-32 md:w-32 p-4"></div>
        <div className="box-content h-12 w-12 md:h-32 md:w-32 p-4"></div>
        <div className="box-content h-12 w-12 md:h-32 md:w-32 p-4 mr-8 mt-2 border-4 rounded-full"></div>
        <div className="box-content h-12 w-12 md:h-32 md:w-32 p-4"></div>
        <div className="box-content h-12 w-12 md:h-32 md:w-32 p-4 ml-12 border-4 rounded-full"></div>
        <div className="box-content h-12 w-12 md:h-32 md:w-32 p-4"></div>
        <div className="box-content h-12 w-12 md:h-32 md:w-32 p-4"></div>
        <div className="box-content h-12 w-12 md:h-32 md:w-32 p-4 border-4 rounded-full ml-12"></div>
        <div className="box-content h-12 w-12 md:h-32 md:w-32 p-4"></div>
        <div className="box-content h-12 w-12 md:h-32 md:w-32 p-4 border-4 rounded-full ml-20"></div>
        <div className="box-content h-12 w-12 md:h-32 md:w-32 p-4"></div>
        <div className="box-content h-12 w-12 md:h-32 md:w-32 p-4"></div>
        <div className="box-content h-12 w-12 md:h-32 md:w-32 p-4 border-4 rounded-full ml-2"></div>
        <div className="box-content h-12 w-12 md:h-32 md:w-32 p-4"></div>
        <div className="box-content h-12 w-12 md:h-32 md:w-32 p-4"></div>
        <div className="box-content h-12 w-12 md:h-32 md:w-32 p-4 border-4 rounded-full mr-12"></div>
      </div>

      <Footer />
    </div>
  )
}

export default HomePage

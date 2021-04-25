import { Link, routes } from '@redwoodjs/router'

import Logo from './mtntpcdng_lg.svg'
import Palm from './palm.png'
import Sword from './swords.png'
import Compass from './compass.png'
import Ship from './ship.png'
import Chest from './chest.png'
import Skull from './skull.png'

import Footer from '../../components/Footer'

const HomePage = () => {
  return (
    <div>
      <div className="mx-6 my-6">
        <Logo />
      </div>

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
        <p>
          _&nbsp;My{' '}
          <a
            href="https://mountaintop-coding.s3-us-west-1.amazonaws.com/Isaac+Tait+-+Junior+Web+Developer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:bg-blue-500 hover:text-white"
          >
            Resume
          </a>
        </p>
      </div>

      <div className="grid grid-cols-3 gap-2 md:grid-cols-4 md:gap-4 heropattern-topography-blue-500 pb-2">
        <div className="box-content h-12 w-12 md:h-32 md:w-32 p-4"></div>
        <div className="box-content h-12 w-12 md:h-32 md:w-32 p-4"></div>
        <div className="box-content h-12 w-12 md:h-32 md:w-32 p-4 mr-8 mt-2">
          <a
            href="https://www.fallfishtenkara.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Palm} alt="palm tree icon" />
          </a>
        </div>
        <div className="box-content h-12 w-12 md:h-32 md:w-32 p-4"></div>
        <div className="box-content h-12 w-12 md:h-32 md:w-32 p-4 ml-12">
          <a
            href="https://vwtypetwo.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Compass} alt="compass" />
          </a>
        </div>
        <div className="box-content h-12 w-12 md:h-32 md:w-32 p-4"></div>
        <div className="box-content h-12 w-12 md:h-32 md:w-32 p-4"></div>
        <div className="box-content h-12 w-12 md:h-32 md:w-32 p-4 ml-12">
          <a
            href="https://github.com/Isaac-Tait"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Ship} alt="ship" />
          </a>
        </div>
        <div className="box-content h-12 w-12 md:h-32 md:w-32 p-4"></div>
        <div className="box-content h-12 w-12 md:h-32 md:w-32 p-4 ml-20">
          <a
            href="https://github.com/Isaac-Tait/A-Novel-by-Isaac-Tait"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Chest} alt="treasure chest" />
          </a>
        </div>
        <div className="box-content h-12 w-12 md:h-32 md:w-32 p-4"></div>
        <div className="box-content h-12 w-12 md:h-32 md:w-32 p-4"></div>
        <div className="box-content h-12 w-12 md:h-32 md:w-32 p-4 ml-2">
          <a
            href="https://www.linkedin.com/in/isaacmtait/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Skull} alt="skull and cross bones" />
          </a>
        </div>
        <div className="box-content h-12 w-12 md:h-32 md:w-32 p-4"></div>
        <div className="box-content h-12 w-12 md:h-32 md:w-32 p-4"></div>
        <div className="box-content h-12 w-12 md:h-32 md:w-32 p-4 mr-12">
          <a
            href="https://blog.mountaintopcoding.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Sword} alt="crossed swords" />
          </a>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default HomePage

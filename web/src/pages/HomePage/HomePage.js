import { Link, routes } from '@redwoodjs/router'

import Logo from './mtntpcdng_lg.png'
import Palm from './palm.png'
import Sword from './swords.png'
import Compass from './compass.png'
import Ship from './ship.png'
import Chest from './chest.png'
import Skull from './skull.png'

import Footer from '../../components/Footer'

const HomePage = () => {
  const callback = function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fadeIn')
      } else {
        entry.target.classList.remove('animation-fadeIn')
      }
    })
  }

  const observer = new IntersectionObserver(callback)

  const targets = document.querySelectorAll('.js-show-on-scroll')
  targets.forEach(function (target) {
    target.classList.add('opacity-0')
    observer.observe(target)
  })

  return (
    <div>
      <div className="p-4">
        <div className="rounded-lg shadow-lg mb-2 h-screen flex flex-col justify-center content-center bg-indigo-100 js-show-on-scroll">
          <img
            src={Logo}
            alt="Mountain Top Coding Logo"
            className="w-1/2 flex justify-center mx-auto"
          />
          <div className="w-1/2 flex justify-center mx-auto mt-40">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 animate-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>

        <div className="rounded-lg shadow-lg mb-2 h-screen flex flex-wrap content-center bg-indigo-200 js-show-on-scroll">
          <p className="font-semibold text-xl md:text-5xl w-1/2 justify-center mx-auto">
            Hello, I am <span className="text-blue-500">Isaac Tait</span> - a
            Jamstack web developer.
          </p>
        </div>

        <div className="rounded-lg shadow-lg mb-2 h-screen flex flex-col content-center text-xs bg-indigo-300 js-show-on-scroll md:text-base">
          <div className="justify-center my-auto mx-auto">
            <p>
              &#128760;&nbsp;
              <Link
                to={routes.about()}
                className="text-blue-500 underline hover:bg-blue-500 hover:text-white"
              >
                About
              </Link>
              &nbsp;Me
            </p>
          </div>
          <div className="justify-center my-auto mx-auto">
            <p>
              &#128507;&nbsp;The OG{' '}
              <a
                href="https://mountaintopcoding.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline hover:bg-blue-500 hover:text-white"
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
          <div className="justify-center my-auto mx-auto">
            <p>
              &#127983; My{' '}
              <a
                href="https://mountaintop-coding.s3-us-west-1.amazonaws.com/Isaac+Tait+-+Junior+Web+Developer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline hover:bg-blue-500 hover:text-white"
              >
                Resume
              </a>
            </p>
          </div>
        </div>

        <div className="rounded-lg shadow-lg mb-2 h-screen grid grid-cols-3 gap-2 md:grid-cols-4 md:gap-4 heropattern-topography-blue-500 pb-2 js-show-on-scroll">
          <div className="box-content h-12 w-12 md:h-32 md:w-32 p-4"></div>
          <div className="box-content h-12 w-12 md:h-32 md:w-32 p-4"></div>
          <div className="box-content h-12 w-12 md:h-32 md:w-32 p-4 mr-8 mt-2">
            <a
              href="https://www.fallfishtenkara.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fallfish Tenkara
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
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default HomePage

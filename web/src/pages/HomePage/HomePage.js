import { Link, routes } from '@redwoodjs/router'
//import React, { useRef, useEffect, useState } from 'react'

import Logo from './mtntpcdng_lg.png'
import mountainOne from './mountainOne.png'
import campFire from './campFire.png'
import map from './map.png'
import iceAxe from './iceAxe.png'
import mountainTwo from './mountainTwo.png'
import rope from './rope.png'

import Footer from '../../components/Footer'

const HomePage = () => {
  const callback = function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fadeIn')
      } else {
        entry.target.classList.remove('animate-fadeIn')
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
        <div className="rounded-lg shadow-lg mb-2 h-screen flex flex-col justify-center content-center bg-blue-100 js-show-on-scroll">
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

        <div className="rounded-lg shadow-lg mb-2 h-screen flex flex-wrap content-center bg-blue-200 js-show-on-scroll">
          <p className="font-semibold text-xl md:text-5xl w-1/2 justify-center mx-auto">
            Hello{' '}
            <span role="img" aria-label="waving hand">
              &#128075;
            </span>
            , I am <span className="text-blue-500">Isaac Tait</span> - a
            Jamstack web developer who loves the outdoors.
          </p>
        </div>

        <div className="rounded-lg shadow-lg mb-2 h-screen flex flex-col content-center text-xs bg-blue-300 js-show-on-scroll md:text-base">
          <div className="justify-center my-auto mx-auto">
            <p>
              <span role="img" aria-label="ufo flying saucer">
                &#128760;{' '}
              </span>
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
              <span role="img" aria-label="snow capped mountain">
                &#128507;{' '}
              </span>
              The OG{' '}
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
              <span role="img" aria-label="japanese castle">
                &#127983;{' '}
              </span>
              My{' '}
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
          <div className="justify-center my-auto mx-auto">
            <p>
              <span role="img" aria-label="evergreen tree">
              &#127794;{' '}
              </span>
              A collection of my{' '}
              <a
                href="https://isaac-tait.github.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline hover:bg-blue-500 hover:text-white"
              >
                writing
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
              <img
                src={mountainOne}
                alt="hand drawn mountain"
                title="My adventures in Japan"
              />
            </a>
          </div>

          <div className="box-content h-12 w-12 md:h-32 md:w-32 p-4"></div>
          <div className="box-content h-12 w-12 md:h-32 md:w-32 p-4 ml-12">
            <a
              href="https://vwtypetwo.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={iceAxe}
                alt="a glacier crossing tool"
                title="My VW Bus website"
              />
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
              <img
                src={campFire}
                alt="a lovely crackling campfire"
                title="My GitHub Profile"
              />
            </a>
          </div>
          <div className="box-content h-12 w-12 md:h-32 md:w-32 p-4"></div>

          <div className="box-content h-12 w-12 md:h-32 md:w-32 p-4 ml-20">
            <a
              href="https://macadamgrinding.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={map}
                alt="a map over a map..."
                title="My gravel cycling website"
              />
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
              <img
                src={rope}
                alt="rope, a climbers best friend"
                title="My Linkedin profile"
              />
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
              <img
                src={mountainTwo}
                alt="another beautiful mountain"
                title="My web development blog"
              />
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

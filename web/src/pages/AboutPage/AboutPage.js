import { Link, routes } from '@redwoodjs/router'

import picture from './profile.jpg'
import tokyo from './tokyoBay.png'
//import Logo from './mtntpcdng_lg.svg'
import Footer from '../../components/Footer'

const AboutPage = () => {
  return (
    <div>
      <div className="my-2 rounded-lg shadow-lg text-lg md:w-1/2 md:flex md:justify-center md:mx-auto bg-indigo-100">
        {/* <Link to={routes.home()} className="mx-6">
        <Logo />
      </Link> */}

        <div className="flex flex-col mx-4 mb-4 md:w-2/3 md:mx-auto">
          <p className="font-medium text-2xl text-blue-500 tracking-wide">
            About Me
          </p>
          <p className="mt-2">
            Hello, and welcome to mountainTopCoding(
            <span role="img" aria-label="mountain with snow-cap">
              &#127956;
            </span>
            ); my portfolio webpage that I built using Jamstack solutions. I am
            glad you are here.
          </p>
          <p className="mt-2">
            My journey to becoming a web developer started on March 12, 2019 but
            to fully understand my story I have to go back a little further than
            that...
          </p>
          <img
            src={picture}
            alt="Isaac Tait's profile"
            className="h-60 w-80 m-4 rounded-lg shadow-lg mx-auto"
          />
          <p className="mt-2">
            On January 1, 2017 my son Tadashi Ethan Tait was born in Fukushima
            Prefecture, Japan. On September 1, 2017 my wife and I legally became
            his parents. As he grew older I realized that the day was
            approaching when he would go off to school and my full time
            responsibilities as a stay-at-home dad would come to an end, and
            that I would need to find a job.
          </p>
          <img
            src={tokyo}
            alt="Isaac and Tadashi looking over Tokyo Bay"
            className="h-100 w-80 m-4 rounded-lg shadow-lg mx-auto"
          />
          <p className="mt-2">
            In 2012 when I took up skiing I lamented the fact that I had not
            discovered skiing sooner in life. A similar wistfulness overcame me
            when I discovered web development. Since that realization in March
            2019 I have been making up for lost time learning and coding at
            every opportunity.
          </p>
          <p className="mt-2">
            I am having a blast learning web development and I have built some
            cool apps (IMHO) and created some fun projects. This website is a
            venue for those endeavors so stay for a while, poke around a bit, or
            follow me on&nbsp;
            <a
              href="https://twitter.com/Isaac_Tait_83"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              Twitter
            </a>{' '}
            or{' '}
            <a
              href="https://github.com/Isaac-Tait"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              GitHub
            </a>
            &nbsp;to keep abreast of my future projects and upward trajectory.
            Cheers!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AboutPage

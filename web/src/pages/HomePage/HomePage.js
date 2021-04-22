import { Link, routes } from '@redwoodjs/router'
import Logo from './mtntpcdng_lg.svg'

const HomePage = () => {
  return (
    <div>
      <div className="mx-6 my-6">
        <Logo />
      </div>

      <div className="">
        <h1 className="font-semibold text-5xl w-1/2 justify-center mx-auto">
          Hello, I am <span className="text-blue-500">Isaac Tait</span>. I am a
          Jamstack web developer.
        </h1>
      </div>

      <div>
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
      <>
        <p>This is ultra basic for now, more to come soon.</p>
        <p>
          Here is a link to `<Link to={routes.home()}>Home</Link>`, which you
          are already at so it will appear not to work...
        </p>
      </>
    </div>
  )
}

export default HomePage

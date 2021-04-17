import { Link, routes } from '@redwoodjs/router'

const HomePage = () => {
  return (
    <div>
      <div className="flex flex-wrap align-content-center">
        <h1 className="font-semibold text-red-500">
          Welcome to the new and improved mountainTopCoding(
          <span role="img" aria-label="mountain with snow-cap">
            &#127956;
          </span>
          );!
        </h1>
      </div>
      <div>
        <p>
          Find the original{' '}
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
            className="text-red-500 hover:bg-red-500 hover:text-white"
          >
            here
          </a>
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

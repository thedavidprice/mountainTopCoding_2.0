import { Link, routes } from '@redwoodjs/router'

const HomePage = () => {
  return (
    <div>
      <div className="flex flex-wrap align-content-center">
        <h1 className="font-semibold text-red-500">
          Welcome to my portfolio site!
        </h1>

        <p>
          Find me in <code>./web/src/pages/HomePage/HomePage.js</code>
        </p>
      </div>
      <>
        <p>
          My default route is named <code>home</code>, link to me with `
          <Link to={routes.home()}>Home</Link>`
        </p>
      </>
    </div>
  )
}

export default HomePage

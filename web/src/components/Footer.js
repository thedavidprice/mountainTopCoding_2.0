import React from 'react'

const Footer = () => {
  return (
    <div className="flex flex-row justify-between text-xs md:text-base bg-blue-500 w-full">
      <p>
        Built with{' '}
        <a
          href="https://redwoodjs.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white"
        >
          RedwoodJS
        </a>
        &nbsp;and{' '}
        <a
          href="https://www.tailwindcss.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white"
        >
          TailwindCSS
        </a>
        .
      </p>
    </div>
  )
}

export default Footer

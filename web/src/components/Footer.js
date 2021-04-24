import React from 'react'

const Footer = () => {
  return (
    <div className="flex flex-row justify-between text-xs md:text-base">
      <p>
        Built with{' '}
        <a
          href="https://redwoodjs.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          RedwoodJS
        </a>
        &nbsp;and{' '}
        <a
          href="https://www.tailwindcss.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          TailwindCSS
        </a>
        .
      </p>
    </div>
  )
}

export default Footer

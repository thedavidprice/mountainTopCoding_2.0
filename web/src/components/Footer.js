import React from 'react'

const Footer = () => {
  return (
    <div>
      <p>
        Built with{' '}
        <a
          href="https://redwoodjs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          RedwoodJS
        </a>
        and{' '}
        <a
          href="https://www.tailwindcss.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          TailwindCSS
        </a>
        .
      </p>
      <p>
        Another{' '}
        <a
          href="https://mountaintopcoding.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          mountainTopCoding(
          <span role="img" aria-label="mountain with snow-cap">
            &#127956;
          </span>
          );
        </a>
        project.
      </p>
    </div>
  )
}

export default Footer

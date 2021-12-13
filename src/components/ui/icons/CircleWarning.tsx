import * as React from 'react'

function SvgCircleWarning(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm0 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 13.8a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4zM12 6a1 1 0 01.993.883L13 7v6l-.007.117a1 1 0 01-1.986 0L11 13V7l.007-.117A1 1 0 0112 6z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default SvgCircleWarning

import * as React from 'react'

function SvgChevronLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.93 12l6.364 6.364a1 1 0 001.414-1.414L9.758 12l4.95-4.95a1 1 0 10-1.414-1.414L6.93 12z"
      />
    </svg>
  )
}

export default SvgChevronLeft

import * as React from 'react'

function SvgChevronRight(props: React.SVGProps<SVGSVGElement>) {
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
        d="M17.071 12l-6.364 6.364a1 1 0 01-1.414-1.414l4.95-4.95-4.95-4.95a1 1 0 111.414-1.414L17.071 12z"
      />
    </svg>
  )
}

export default SvgChevronRight

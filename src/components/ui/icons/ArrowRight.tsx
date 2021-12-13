import * as React from 'react'

function SvgArrowRight(props: React.SVGProps<SVGSVGElement>) {
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
        d="M16.172 13H5a1 1 0 010-2h11.172l-3.95-3.95a1 1 0 111.414-1.414L20 12l-6.364 6.364a1 1 0 01-1.414-1.414l3.95-3.95z"
      />
    </svg>
  )
}

export default SvgArrowRight

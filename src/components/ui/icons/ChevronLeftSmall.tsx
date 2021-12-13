import * as React from 'react'

function SvgChevronLeftSmall(props: React.SVGProps<SVGSVGElement>) {
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
        d="M8.464 12c0 .256.098.512.293.707l3.536 3.536a1 1 0 001.414-1.415L10.88 12l2.828-2.828a1 1 0 10-1.414-1.415l-3.536 3.536a.997.997 0 00-.293.707z"
      />
    </svg>
  )
}

export default SvgChevronLeftSmall

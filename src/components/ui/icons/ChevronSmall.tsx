import * as React from 'react'

function SvgChevronSmall(props: React.SVGProps<SVGSVGElement>) {
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
        d="M15.536 12a.997.997 0 01-.293.707l-3.536 3.536a1 1 0 01-1.414-1.415L13.12 12l-2.828-2.828a1 1 0 011.414-1.415l3.536 3.536a.997.997 0 01.293.707z"
      />
    </svg>
  )
}

export default SvgChevronSmall

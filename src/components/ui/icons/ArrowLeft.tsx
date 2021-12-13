import * as React from 'react'

function SvgArrowLeft(props: React.SVGProps<SVGSVGElement>) {
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
        d="M7.828 13l3.95 3.95a1 1 0 11-1.414 1.414L4 12l6.364-6.364a1 1 0 011.414 1.414L7.828 11H19a1 1 0 010 2H7.828z"
      />
    </svg>
  )
}

export default SvgArrowLeft

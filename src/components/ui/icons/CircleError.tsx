import * as React from 'react'

function SvgCircleError(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm0 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM8.722 7.295L12 10.574l3.278-3.279a1.008 1.008 0 011.427 1.427L13.426 12l3.279 3.278a1.008 1.008 0 01-1.427 1.427L12 13.426l-3.278 3.279a1.008 1.008 0 01-1.427-1.427L10.574 12 7.295 8.722a1.008 1.008 0 011.427-1.427z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default SvgCircleError

import * as React from 'react'

function SvgCircleActive(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm0 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.392 5.82a1 1 0 011.545 1.263l-.08.097-6.5 7a1 1 0 01-1.396.067l-.089-.088-2.625-3a1 1 0 011.417-1.407l.089.09 1.894 2.165 5.745-6.187z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default SvgCircleActive

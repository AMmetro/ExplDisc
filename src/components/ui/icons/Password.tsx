import * as React from 'react'

function SvgPassword(props: React.SVGProps<SVGSVGElement>) {
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
        d="M7 9.126V7a5 5 0 0110 0v2.126c1.725.444 3 2.01 3 3.874v1a8 8 0 11-16 0v-1a4.001 4.001 0 013-3.874zM9 9h6V7a3 3 0 00-6 0v2zm-1 2a2 2 0 00-2 2v1a6 6 0 1012 0v-1a2 2 0 00-2-2H8zm5 4a1 1 0 11-2 0 1 1 0 112 0z"
      />
    </svg>
  )
}

export default SvgPassword

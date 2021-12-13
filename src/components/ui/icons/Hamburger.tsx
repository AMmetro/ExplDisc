import * as React from 'react'

function SvgHamburger(props: React.SVGProps<SVGSVGElement>) {
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
        d="M2 3h20a1 1 0 010 2H2a1 1 0 110-2zm0 8h20a1 1 0 010 2H2a1 1 0 010-2zm0 8h20a1 1 0 010 2H2a1 1 0 010-2z"
      />
    </svg>
  )
}

export default SvgHamburger

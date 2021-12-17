import * as React from 'react'

function SvgFilter(props: React.SVGProps<SVGSVGElement>) {
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
        d="M8.5 13.5a3.502 3.502 0 013.355 2.5H21a1 1 0 010 2h-9.145a3.502 3.502 0 01-6.71 0H3a1 1 0 010-2h2.145A3.502 3.502 0 018.5 13.5zm0 2a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm7-11A3.502 3.502 0 0118.855 7H21a1 1 0 010 2h-2.145a3.502 3.502 0 01-6.71 0H3a1 1 0 110-2h9.145A3.502 3.502 0 0115.5 4.5zm0 2a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
      />
    </svg>
  )
}

export default SvgFilter

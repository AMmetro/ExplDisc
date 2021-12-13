import * as React from 'react'

function SvgCart(props: React.SVGProps<SVGSVGElement>) {
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
        d="M7 6V5a5 5 0 1110 0v1h2.112a2 2 0 012 1.738l1.43 10.729A4 4 0 0118.567 23h.002-13.13a4.002 4.002 0 01-4-4.534L2.889 7.74A1.998 1.998 0 014.88 6H7zm2 0h6V5a3 3 0 00-6 0v1zM7 8H4.872l-1.45 10.733A2 2 0 005.43 21h13.14a2.002 2.002 0 001.989-2.268L19.129 8H17v1a1 1 0 01-2 0V8H9v1a1 1 0 11-2 0V8z"
      />
    </svg>
  )
}

export default SvgCart

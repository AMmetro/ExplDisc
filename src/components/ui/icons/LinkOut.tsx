import * as React from 'react'

function SvgLinkOut(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        d="M6 2a4 4 0 00-3.995 3.8L2 6v12a4 4 0 003.8 3.995L6 22h12a4 4 0 004-4 1 1 0 00-1.993-.117L20 18a2 2 0 01-1.85 1.995L18 20H6a2 2 0 01-1.995-1.85L4 18V6a2 2 0 011.85-1.995L6 4h12a2 2 0 011.995 1.85L20 6a1 1 0 002 0 4 4 0 00-3.8-3.995L18 2H6zm6.293 6.293L8.586 12l3.707 3.707a1 1 0 001.414-1.414L12.414 13H21a1 1 0 000-2h-8.586l1.293-1.293a1 1 0 10-1.414-1.414z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default SvgLinkOut

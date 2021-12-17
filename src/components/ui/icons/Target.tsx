import * as React from 'react'

function SvgTarget(props: React.SVGProps<SVGSVGElement>) {
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
        d="M12 2a1 1 0 01.993.883L13 3l.001 1.062A8.004 8.004 0 0119.938 11H21a1 1 0 01.117 1.993L21 13h-1.062a8.004 8.004 0 01-6.937 6.938L13 21a1 1 0 01-1.993.117L11 21v-1.062a8.004 8.004 0 01-6.938-6.937L3 13a1 1 0 01-.117-1.993L3 11h1.062A8.004 8.004 0 0111 4.062V3a1 1 0 011-1zm0 4a6 6 0 100 12 6 6 0 000-12zm0 3a3 3 0 11-.001 6.001A3 3 0 0112 9zm0 2a1 1 0 10.001 2.001A1 1 0 0012 11z"
      />
    </svg>
  )
}

export default SvgTarget

import * as React from 'react'

function SvgCloseMedium(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        d="M13.421 11.997l4.95 4.95a1 1 0 01-1.414 1.414l-4.95-4.95-4.95 4.95a1 1 0 11-1.414-1.414l4.95-4.95-4.95-4.95a1 1 0 011.414-1.414l4.95 4.95 4.95-4.95a1 1 0 011.414 1.414l-4.95 4.95z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default SvgCloseMedium

import * as React from 'react'

function SvgPlus(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        d="M12 4a1 1 0 011 1v6h6a1 1 0 010 2h-6v6a1 1 0 01-2 0v-6H5a1 1 0 010-2h6V5a1 1 0 011-1z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default SvgPlus

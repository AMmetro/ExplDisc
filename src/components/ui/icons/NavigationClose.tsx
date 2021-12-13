import * as React from 'react'

function SvgNavigationClose(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d="M11.985 10.571l7.778-7.778a1 1 0 011.415 1.414l-7.779 7.778 7.779 7.778c.39.391.39 1.024 0 1.415-.39.39-1.024.39-1.415 0l-7.778-7.779-7.778 7.779a1 1 0 01-1.414-1.415l7.778-7.778-7.778-7.778a1 1 0 011.414-1.414l7.778 7.778z"
        fill="#FF6F00"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default SvgNavigationClose

import * as React from 'react'

function SvgClose(props: React.SVGProps<SVGSVGElement>) {
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
        d="M11.985 10.571l7.778-7.778a1 1 0 111.415 1.414l-7.779 7.778 7.779 7.778a1 1 0 11-1.415 1.415l-7.778-7.779-7.778 7.779a1 1 0 01-1.414-1.415l7.778-7.778-7.778-7.778a1 1 0 011.414-1.414l7.778 7.778z"
      />
    </svg>
  )
}

export default SvgClose

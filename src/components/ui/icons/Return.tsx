import * as React from 'react'

function SvgReturn(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        d="M6.707 11.293a1 1 0 01.083 1.32l-.083.094a1 1 0 01-1.32.083l-.094-.083L1.586 9l3.707-3.707a1 1 0 011.497 1.32l-.083.094L5.415 8H17l.217.005a5 5 0 010 9.99L17 18h-3l-.117-.007a1 1 0 010-1.986L14 16h3l.176-.005a3 3 0 000-5.99L17 10H5.415l1.292 1.293z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default SvgReturn

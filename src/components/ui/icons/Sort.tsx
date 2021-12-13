import * as React from 'react'

function SvgSort(props: React.SVGProps<SVGSVGElement>) {
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
        d="M7 6a1 1 0 01.993.884L8 7v9.188l1.293-1.293a1 1 0 011.32-.083l.094.083a1 1 0 01.083 1.32l-.083.095L7 20l-3.707-3.689a1 1 0 011.32-1.498l.094.083L6 16.189V7a1 1 0 01.77-.975l.113-.02L7 6zm10-2l3.707 3.689.083.094c.28.36.28.867 0 1.227l-.083.094-.094.083a1 1 0 01-1.226 0l-.094-.083L18 7.811V17l-.007.117a1 1 0 01-.876.877L17 18l-.117-.007-.112-.02a1.001 1.001 0 01-.764-.857L16 17V7.811l-1.293 1.293-.094.083a1 1 0 01-1.403-1.404l.083-.094L17 4z"
      />
    </svg>
  )
}

export default SvgSort

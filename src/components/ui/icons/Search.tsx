import * as React from 'react'

function SvgSearch(props: React.SVGProps<SVGSVGElement>) {
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
        d="M18.032 16.618l3.675 3.675a1 1 0 01-1.414 1.414l-3.675-3.675a9 9 0 111.414-1.414zM11 18a7 7 0 100-14 7 7 0 000 14z"
      />
    </svg>
  )
}

export default SvgSearch

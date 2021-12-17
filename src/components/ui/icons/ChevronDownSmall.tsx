import * as React from 'react'

function SvgChevronDownSmall(props: React.SVGProps<SVGSVGElement>) {
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
        d="M12 15.536a.997.997 0 01-.707-.293l-3.536-3.536a1 1 0 011.415-1.414L12 13.12l2.828-2.828a1 1 0 011.415 1.414l-3.536 3.536a.997.997 0 01-.707.293z"
      />
    </svg>
  )
}

export default SvgChevronDownSmall

import * as React from 'react'

function SvgChevronUp(props: React.SVGProps<SVGSVGElement>) {
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
        d="M12.007 7.964l-6.364 6.364a1 1 0 001.414 1.415l4.95-4.95 4.95 4.95a1 1 0 001.414-1.415l-6.364-6.364z"
      />
    </svg>
  )
}

export default SvgChevronUp

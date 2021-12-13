import * as React from 'react'

function SvgCirclePending(props: React.SVGProps<SVGSVGElement>) {
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
        d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm0 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 3a1 1 0 01.993.883L12 6v6h4a1 1 0 01.117 1.993L16 14h-5a1 1 0 01-.993-.883L10 13V6a1 1 0 011-1z"
      />
    </svg>
  )
}

export default SvgCirclePending

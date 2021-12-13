import * as React from 'react'

function SvgExclamationSmall(props: React.SVGProps<SVGSVGElement>) {
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
        d="M12 4a8 8 0 110 16 8 8 0 010-16zm0 10.8a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4zM12 7a1 1 0 00-.993.883L11 8v4a1 1 0 001.993.117L13 12V8a1 1 0 00-1-1z"
      />
    </svg>
  )
}

export default SvgExclamationSmall

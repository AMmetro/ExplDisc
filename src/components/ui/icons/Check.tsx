import * as React from 'react'

function SvgCheck(props: React.SVGProps<SVGSVGElement>) {
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
        d="M17.004 6.329a1 1 0 011.561 1.244l-.078.098-8.246 9.108a1 1 0 01-1.41.073l-.089-.09-3.5-4.063a1 1 0 011.428-1.395l.088.09 2.76 3.203 7.486-8.268z"
      />
    </svg>
  )
}

export default SvgCheck

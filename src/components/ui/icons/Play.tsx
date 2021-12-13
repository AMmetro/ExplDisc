import * as React from 'react'

function SvgPlay(props: React.SVGProps<SVGSVGElement>) {
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
        d="M16.502 11.35L9.199 7.165c-.666-.382-1.203-.077-1.199.68l.037 8.308c.004.756.547 1.064 1.215.685l7.247-4.112c.667-.378.668-.994.003-1.376z"
      />
    </svg>
  )
}

export default SvgPlay

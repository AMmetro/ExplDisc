import * as React from 'react'

function SvgInstagram(props: React.SVGProps<SVGSVGElement>) {
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
        d="M16.444 2A5.556 5.556 0 0122 7.556v8.888A5.556 5.556 0 0116.444 22H7.556A5.556 5.556 0 012 16.444V7.556A5.556 5.556 0 017.556 2h8.888zM12 17.556a5.556 5.556 0 10-.001-11.113A5.556 5.556 0 0012 17.556zm6.111-10.334a1.112 1.112 0 100-2.223 1.112 1.112 0 000 2.223zM12 15.333a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666z"
      />
    </svg>
  )
}

export default SvgInstagram

import * as React from 'react'

function SvgProfile(props: React.SVGProps<SVGSVGElement>) {
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
        d="M12 14a6 6 0 110-12 6 6 0 010 12zm0-2a4 4 0 100-8 4 4 0 000 8zM3.858 22.513a1 1 0 01-1.716-1.026l.67-1.122A9 9 0 0110.53 16h2.94a9 9 0 017.718 4.367l.67 1.12a1 1 0 01-1.716 1.026l-.67-1.118A7 7 0 0013.47 18h-2.94a7 7 0 00-6.002 3.393l-.67 1.12z"
      />
    </svg>
  )
}

export default SvgProfile

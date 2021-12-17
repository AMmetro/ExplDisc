import * as React from 'react'

function SvgTimeSmall(props: React.SVGProps<SVGSVGElement>) {
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
        d="M12 4a8 8 0 110 16 8 8 0 010-16zm0 2a6 6 0 100 12 6 6 0 000-12zm0 1.5a1 1 0 01.993.883L13 8.5V12h2.111a1 1 0 01.117 1.993L15.11 14H12a1 1 0 01-.993-.883L11 13V8.5a1 1 0 011-1z"
      />
    </svg>
  )
}

export default SvgTimeSmall

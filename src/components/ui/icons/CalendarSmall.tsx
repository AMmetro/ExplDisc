import * as React from 'react'

function SvgCalendarSmall(props: React.SVGProps<SVGSVGElement>) {
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
        d="M16 2a1 1 0 01.993.883L17 3v1h1a3 3 0 013 3v11a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h1V3a1 1 0 01.883-.993L8 2a1 1 0 01.993.883L9 3v1h6V3a1 1 0 01.883-.993L16 2zm3 10H5v6a1 1 0 001 1h12a1 1 0 001-1v-6zM7 6H6a1 1 0 00-1 1v3h14V7a1 1 0 00-1-1h-1v1a1 1 0 01-.883.993L16 8a1 1 0 01-.993-.883L15 7V6H9v1a1 1 0 01-.883.993L8 8a1 1 0 01-.993-.883L7 7V6z"
      />
    </svg>
  )
}

export default SvgCalendarSmall

import * as React from 'react'

function SvgReports(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        d="M15.296 1c.71 0 1.395.252 1.935.707l.157.143 2.704 2.632c.532.518.852 1.212.901 1.948l.007.202V20a3 3 0 01-2.824 2.995L18 23H6a3 3 0 01-2.995-2.824L3 20V4a3 3 0 012.824-2.995L6 1h9.296zm0 2H6a1 1 0 00-.993.883L5 4v16a1 1 0 00.883.993L6 21h12a1 1 0 00.993-.883L19 20V6.632c0-.225-.076-.442-.213-.617l-.09-.1-2.704-2.632a1.002 1.002 0 00-.568-.275L15.295 3zM16 15a1 1 0 01.117 1.993L16 17H8a1 1 0 01-.117-1.993L8 15h8zm0-4a1 1 0 01.117 1.993L16 13H8a1 1 0 01-.117-1.993L8 11h8zm-4-4a1 1 0 01.117 1.993L12 9H8a1 1 0 01-.117-1.993L8 7h4z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default SvgReports

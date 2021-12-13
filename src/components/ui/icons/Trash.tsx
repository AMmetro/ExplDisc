import * as React from 'react'

function SvgTrash(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        d="M14 1a3 3 0 012.995 2.824L17 4v1h4a1 1 0 01.993.883L22 6a1 1 0 01-.883.993L21 7h-1v13a3 3 0 01-2.824 2.995L17 23H7a3 3 0 01-2.995-2.824L4 20V7H3a1 1 0 01-.993-.883L2 6a1 1 0 01.883-.993L3 5h4V4a3 3 0 012.824-2.995L10 1h4zm4 6H6v13a1 1 0 00.883.993L7 21h10a1 1 0 00.993-.883L18 20V7zm-8 3a1 1 0 01.993.883L11 11v6a1 1 0 01-1.993.117L9 17v-6a1 1 0 011-1zm4 0a1 1 0 01.993.883L15 11v6a1 1 0 01-1.993.117L13 17v-6a1 1 0 011-1zm0-7h-4a1 1 0 00-.993.883L9 4v1h6V4a1 1 0 00-.883-.993L14 3z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default SvgTrash

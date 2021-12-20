import * as React from 'react'

function SvgOrderNumber(props: React.SVGProps<SVGSVGElement>) {
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
        d="M18 1a1 1 0 01.707.293l4 4a.98.98 0 01.294.656L23 7v13a3 3 0 01-2.824 2.995L20 23H4a3 3 0 01-2.995-2.824L1 20V6.058a.978.978 0 01.293-.765l4-4A1 1 0 016 1h12zm3 6H3v13a1 1 0 00.883.993L4 21h16a1 1 0 00.993-.883L21 20V7zm-4.793 4.293a1 1 0 01.083 1.32l-.083.094L11 17.914l-2.707-2.707a1 1 0 011.32-1.497l.094.083L11 15.086l3.793-3.793a1 1 0 011.414 0zM11 3H6.414l-2 2H11V3zm6.586 0H13v2h6.586l-2-2z"
      />
    </svg>
  )
}

export default SvgOrderNumber

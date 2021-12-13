import * as React from 'react'

function SvgSavings(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        d="M23 20a2 2 0 01-1.85 1.995L21 22H4a3 3 0 01-2.995-2.824L1 19V5l.005-.176a3 3 0 012.819-2.819L4 2h11a2 2 0 011.995 1.85L17 4v2h4a2 2 0 011.995 1.85L23 8v12zM3 7.83V19a1 1 0 00.883.993L4 20h17v-3h-4a3 3 0 01-2.995-2.824L14 14a3 3 0 012.824-2.995L17 11h4V8H4c-.35 0-.687-.06-1-.17zM21 13h-4a1 1 0 00-.974.77l-.02.113L16 14a1 1 0 00.883.993L17 15h4v-2zm-6-9H4a1 1 0 00-.117 1.993L4 6h11V4z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default SvgSavings

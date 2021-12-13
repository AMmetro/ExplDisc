import * as React from 'react'

function SvgEdit(props: React.SVGProps<SVGSVGElement>) {
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
        d="M15.874 3.094a3.559 3.559 0 014.866-.159l.152.142.175.185a3.51 3.51 0 01-.036 4.664l-.143.149L7.762 21H4a1 1 0 01-1-1v-4.014L15.874 3.094zM14.76 7.037l-9.762 9.776V19H6.94l9.968-9.815-2.148-2.148zM19.487 4.5a1.559 1.559 0 00-2.08-.1l-.118.107-.903.903 2.162 2.162.937-.922a1.51 1.51 0 00.208-1.897l-.089-.123-.117-.13z"
      />
    </svg>
  )
}

export default SvgEdit

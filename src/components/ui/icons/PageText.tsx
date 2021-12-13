import * as React from 'react'

function SvgPageText(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M19 22H5a3 3 0 01-3-3V5a3 3 0 013-3h14a3 3 0 013 3v14a3 3 0 01-3 3zM5 4a1 1 0 00-1 1v14a1 1 0 001 1h14a1 1 0 001-1V5a1 1 0 00-1-1z" />
      <path
        fill="currentColor"
        d="M19 22H5a3 3 0 01-3-3V5a3 3 0 013-3h14a3 3 0 013 3v14a3 3 0 01-3 3zM5 4a1 1 0 00-1 1v14a1 1 0 001 1h14a1 1 0 001-1V5a1 1 0 00-1-1z"
      />
      <path d="M10 11a1 1 0 010 2H7a1 1 0 010-2z" />
      <path
        fill="currentColor"
        d="M11 7a1 1 0 010 2H7a1 1 0 010-2zm-1 8a1 1 0 010 2H7a1 1 0 010-2z"
      />
      <path
        data-name="Path"
        fill="currentColor"
        d="M13 11a1 1 0 010 2h-3a1 1 0 010-2zm1-4a1 1 0 010 2h-4a1 1 0 010-2zm-1 8a1 1 0 010 2h-3a1 1 0 010-2z"
      />
      <path
        data-name="Path"
        fill="currentColor"
        d="M15 11a1 1 0 010 2h-3a1 1 0 010-2zm2-4a1 1 0 010 2h-4a1 1 0 010-2z"
      />
      <path fill="currentColor" d="M16 15a1 1 0 010 2h-3a1 1 0 010-2z" />
    </svg>
  )
}

export default SvgPageText

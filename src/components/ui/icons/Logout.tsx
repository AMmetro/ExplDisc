import * as React from 'react'

function SvgLogout(props: React.SVGProps<SVGSVGElement>) {
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
        d="M17.586 11l-1.293-1.293a1 1 0 111.414-1.414L21.414 12l-3.707 3.707a1 1 0 01-1.414-1.414L17.586 13H9a1 1 0 010-2h8.586zM13 2a1 1 0 010 2H6a2 2 0 00-2 2v12a2 2 0 002 2h7a1 1 0 010 2H6a4 4 0 01-4-4V6a4 4 0 014-4h7z"
      />
    </svg>
  )
}

export default SvgLogout

import * as React from 'react'

function SvgActionsProfile(props: React.SVGProps<SVGSVGElement>) {
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
        d="M20 24H4a4 4 0 01-4-4V7a4 4 0 014-4h5V2a2 2 0 012-2h2a2 2 0 012 2v1h5a4.005 4.005 0 014 4v13a4.005 4.005 0 01-4 4zM4 5a2 2 0 00-2 2v13a2 2 0 002 2h16a2 2 0 002-2V7a2 2 0 00-2-2h-5v1a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zm7-3v4h2V2zm1 18a1 1 0 01-.763-.352l-.07-.093-.3-.447a2.626 2.626 0 00-2.021-1.1L8.654 18H7.346a2.688 2.688 0 00-2.113.967l-.1.142-.3.446a1 1 0 01-1.724-1.01l.059-.1.3-.446A4.628 4.628 0 017.1 16.007L7.346 16h.622-.16a3.5 3.5 0 11.225 0h.621a4.676 4.676 0 013.746 1.806l.137.193.3.446A1 1 0 0112 20zm-4-9a1.5 1.5 0 101.5 1.5A1.5 1.5 0 008 11zm10 5h-3a1 1 0 010-2h3a1 1 0 110 2zm1-4h-4a1 1 0 110-2h4a1 1 0 010 2z"
      />
    </svg>
  )
}

export default SvgActionsProfile

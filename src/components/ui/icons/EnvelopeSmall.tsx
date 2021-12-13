import * as React from 'react'

function SvgEnvelopeSmall(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        d="M18 5a3 3 0 013 3v9a3 3 0 01-3 3H6a3 3 0 01-3-3V8a3 3 0 013-3h12zm1 4.803l-5.94 3.714a2 2 0 01-1.967.086l-.153-.086L5 9.803V17a1 1 0 001 1h12a1 1 0 001-1V9.803zM18 7H6a1 1 0 00-.878.522L12 11.82l6.878-4.3A1 1 0 0018 7z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default SvgEnvelopeSmall

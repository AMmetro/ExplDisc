import * as React from 'react'

function SvgPersonalInfo(props: React.SVGProps<SVGSVGElement>) {
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
        d="M12 13a4 4 0 110-8 4 4 0 010 8zm0-2a2 2 0 100-4 2 2 0 000 4zm-3.7 7.6a1 1 0 11-1.6-1.2l.368-.488c1.056-1.262 2.612-1.965 4.2-1.91l1.43.001c1.622-.056 3.178.647 4.268 1.951l.334.446a1 1 0 01-1.6 1.2l-.3-.404a3.304 3.304 0 00-2.667-1.193l-1.5-.001a3.265 3.265 0 00-2.598 1.152L8.3 18.6zM6 1h12a4 4 0 014 4v14a4 4 0 01-4 4H6a4 4 0 01-4-4V5a4 4 0 014-4zm0 2a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H6z"
      />
    </svg>
  )
}

export default SvgPersonalInfo

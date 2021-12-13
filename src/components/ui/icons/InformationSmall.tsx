import * as React from 'react'

function SvgInformationSmall(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        d="M12 18.6a6.6 6.6 0 100-13.2 6.6 6.6 0 100 13.2zm0-1.2a5.4 5.4 0 110-10.8 5.4 5.4 0 010 10.8zm0-7.567A.666.666 0 1012 8.5a.666.666 0 000 1.333zm0 5.667a.5.5 0 00.5-.5v-3.5a.5.5 0 10-1 0V15a.5.5 0 00.5.5z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default SvgInformationSmall

import * as React from 'react'

function SvgCircleInfo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zm0-2C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-13.8a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4zm0 9.8a1 1 0 00.993-.883L13 17v-6l-.007-.117a1 1 0 00-1.986 0L11 11v6l.007.117A1 1 0 0012 18z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default SvgCircleInfo

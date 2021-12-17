import * as React from 'react'

function SvgWarningSmall(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        d="M12 3a9 9 0 110 18 9 9 0 010-18zm0 2a7 7 0 100 14 7 7 0 000-14zm0 9.8a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4zM12 7a1 1 0 01.993.883L13 8v4l-.007.117a1 1 0 01-1.986 0L11 12V8l.007-.117A1 1 0 0112 7z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default SvgWarningSmall

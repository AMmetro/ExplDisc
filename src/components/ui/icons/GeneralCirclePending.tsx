import * as React from 'react'

function SvgGeneralCirclePending(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 18 18"
      {...props}
    >
      <path
        d="M9 0a9 9 0 11-.001 18.001A9 9 0 019 0zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm-.75 2.25a.75.75 0 01.745.663L9 4.5V9h3a.75.75 0 01.087 1.495L12 10.5H8.25a.75.75 0 01-.745-.663L7.5 9.75V4.5a.75.75 0 01.75-.75z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default SvgGeneralCirclePending

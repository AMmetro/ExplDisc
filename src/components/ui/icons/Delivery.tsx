import * as React from 'react'

function SvgDelivery(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        d="M15 3a1 1 0 01.993.883L16 4v3h4a1 1 0 01.724.31l.076.09 3 4a1 1 0 01.192.471L24 12v6a1 1 0 01-.883.993L23 19h-1.036a3.5 3.5 0 01-6.928 0H9.964a3.5 3.5 0 01-6.928 0H1a1 1 0 01-.993-.883L0 18V4a1 1 0 01.883-.993L1 3h14zM6.5 17a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm12 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-3.163 0a3.5 3.5 0 016.326 0H22v-4.667L19.5 9H16v5a1 1 0 01-2 0V5H2v12h1.337a3.5 3.5 0 016.326 0h5.674z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default SvgDelivery

import * as React from 'react'

function SvgYoutube(props: React.SVGProps<SVGSVGElement>) {
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
        d="M22.505 6.406c.47 1.718.452 5.299.452 5.299s0 3.563-.452 5.281a2.75 2.75 0 01-1.935 1.935c-1.719.453-8.591.453-8.591.453s-6.855 0-8.592-.47a2.751 2.751 0 01-1.935-1.936C1 15.268 1 11.687 1 11.687s0-3.563.452-5.281a2.807 2.807 0 011.935-1.954C5.106 4 11.978 4 11.978 4s6.873 0 8.592.47a2.75 2.75 0 011.935 1.936zM9.79 14.979l5.715-3.292L9.79 8.395v6.584z"
      />
    </svg>
  )
}

export default SvgYoutube

import * as React from 'react'

function SvgError(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 80 80"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        d="M44.898 10.625l.129.205 29.132 48.418c2.302 3.79-.393 8.592-4.783 8.748l-.22.004H10.81c-4.445 0-7.173-4.816-5.11-8.642l.106-.19L35.02 10.83c2.218-3.704 7.545-3.772 9.878-.205zm-7.373 1.485l-.109.169L8.223 60.584c-1.156 1.971.201 4.49 2.42 4.611l.168.005h58.345c2.299 0 3.735-2.406 2.687-4.363l-.083-.146L42.624 12.27c-1.138-1.901-3.862-1.957-5.1-.159zM40 53a2 2 0 110 4 2 2 0 010-4zm0-27a1.5 1.5 0 011.5 1.5v20a1.5 1.5 0 01-3 0v-20A1.5 1.5 0 0140 26z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default SvgError

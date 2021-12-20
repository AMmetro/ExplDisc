import * as React from 'react'

function SvgEnvelopeOutline(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        d="M3 10v7.714C3 18.43 3.554 19 4.222 19h15.556c.668 0 1.222-.57 1.222-1.286V10l-8.428 4.866a.995.995 0 01-.572.132.995.995 0 01-.572-.132L3 10zm0-2.31l9 5.197 9-5.196V6.286C21 5.57 20.446 5 19.778 5H4.222C3.554 5 3 5.57 3 6.286V7.69zM19.778 21H4.222C2.437 21 1 19.522 1 17.714V6.286C1 4.478 2.437 3 4.222 3h15.556C21.563 3 23 4.478 23 6.286v11.428C23 19.522 21.563 21 19.778 21z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default SvgEnvelopeOutline

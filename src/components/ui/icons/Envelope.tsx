import * as React from 'react'

function SvgEnvelope(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        d="M2 9.423l9.428 5.443c.18.104.38.146.572.132a.995.995 0 00.572-.132L22 9.423v8.291C22 18.976 21.004 20 19.778 20H4.222C2.996 20 2 18.976 2 17.714V9.423zm0-2.31v-.827C2 5.024 2.996 4 4.222 4h15.556C21.004 4 22 5.024 22 6.286v.827l-10 5.774L2 7.113z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default SvgEnvelope

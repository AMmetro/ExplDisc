import * as React from 'react'

function SvgCreditCard(props: React.SVGProps<SVGSVGElement>) {
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
        d="M22 3a2 2 0 011.995 1.85L24 5v13a2 2 0 01-1.85 1.995L22 20H2a2 2 0 01-1.995-1.85L0 18V5a2 2 0 011.85-1.995L2 3h20zm0 2H2v13h20V5zM6 14a1 1 0 010 2H5a1 1 0 010-2h1zm4 0a1 1 0 010 2H9a1 1 0 010-2h1zm4 0a1 1 0 010 2h-1a1 1 0 010-2h1zm4 0a1 1 0 010 2h-1a1 1 0 010-2h1zM8.5 7a1.5 1.5 0 011.493 1.356L10 8.5v2a1.5 1.5 0 01-1.356 1.493L8.5 12h-3a1.5 1.5 0 01-1.493-1.356L4 10.5v-2a1.5 1.5 0 011.356-1.493L5.5 7h3zM8 9H6v1h2V9z"
      />
    </svg>
  )
}

export default SvgCreditCard

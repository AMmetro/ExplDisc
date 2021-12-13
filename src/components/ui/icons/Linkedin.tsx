import * as React from 'react'

function SvgLinkedin(props: React.SVGProps<SVGSVGElement>) {
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
        d="M4.254 8.147h3.728v10.835H4.254V8.147zm1.866-5.13a2.12 2.12 0 012.117 2.118A2.12 2.12 0 016.12 7.253 2.12 2.12 0 014 5.135a2.12 2.12 0 012.12-2.117zm9.774 4.874c3.618 0 4.106 2.615 4.106 5.173v5.918h-3.722v-5.275c0-1.404-.104-2.479-1.41-2.479-1.2 0-1.667.67-1.667 2.39v5.364h-3.72V8.147h3.591v.929c.579-.63 1.532-1.185 2.822-1.185z"
      />
    </svg>
  )
}

export default SvgLinkedin

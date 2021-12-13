import * as React from 'react'

function SvgProfileSmall(props: React.SVGProps<SVGSVGElement>) {
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
        d="M12 13a4.5 4.5 0 110-9 4.5 4.5 0 010 9zm0-2a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm-5.689 8.585a1 1 0 11-1.622-1.17l.515-.712c1.437-1.785 3.56-2.782 5.737-2.703h2.082c2.213-.079 4.336.918 5.805 2.745l.483.67a1 1 0 11-1.622 1.17l-.45-.628c-1.047-1.3-2.57-2.014-4.18-1.957h-2.154c-1.575-.057-3.097.658-4.11 1.915l-.484.67z"
      />
    </svg>
  )
}

export default SvgProfileSmall

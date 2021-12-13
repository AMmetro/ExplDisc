import * as React from 'react'

function SvgBoy(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        d="M12.5 15l.225.004A6 6 0 0118.5 21a1 1 0 01-2 0 4 4 0 00-3.8-3.995L12.5 17h-2a4 4 0 00-4 4 1 1 0 01-2 0 6 6 0 015.775-5.996L10.5 15h2zm-1-14a6.5 6.5 0 11-6.36 7.85.982.982 0 01-.102-.629A6.5 6.5 0 0111.5 1zm-.392 6.463l-.147.128a7.334 7.334 0 01-3.596 1.685 4.502 4.502 0 008.395-.321c-1.642.023-3.118-.413-4.399-1.307l-.253-.185zM11.5 3a4.5 4.5 0 00-4.495 4.288v.02c1.49-.24 2.736-1.048 3.786-2.458a1 1 0 011.658 1.115l-.186-.137c1.043.815 2.263 1.189 3.702 1.12A4.499 4.499 0 0011.5 3z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default SvgBoy

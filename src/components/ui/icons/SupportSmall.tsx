import * as React from 'react'

function SvgSupportSmall(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        d="M12 5.4a6.6 6.6 0 110 13.2 6.6 6.6 0 110-13.2zm0 1.2a5.4 5.4 0 100 10.8 5.4 5.4 0 000-10.8zm0 8.067A.666.666 0 1112 16a.666.666 0 010-1.333zm.442-6.842c1.26.174 2.244 1.339 2.122 2.631-.091.967-.633 1.627-1.525 2.278l-.196.14-.128.1c-.11.095-.147.16-.155.202v.023l.011.071.003.093a.6.6 0 01-1.138.235l-.036-.091-.024-.108c-.07-.429.083-.913.55-1.328l.17-.139.24-.17c.625-.462.985-.9 1.033-1.419.06-.635-.451-1.241-1.09-1.33-.651-.09-1.335.315-1.57.946a.6.6 0 11-1.124-.418c.432-1.16 1.652-1.882 2.857-1.716z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default SvgSupportSmall

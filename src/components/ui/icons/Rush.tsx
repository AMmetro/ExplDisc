import * as React from 'react'

function SvgRush(props: React.SVGProps<SVGSVGElement>) {
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
        d="M16 1a1 1 0 010 2h-1v1c0 .04-.002.08-.007.118C19.531 4.833 23 8.762 23 13.5A9.5 9.5 0 016.572 20H4a1 1 0 01-.117-1.993L4 18h1.131a9.438 9.438 0 01-.798-2H2a1 1 0 01-.117-1.993L2 14h2.013a9.655 9.655 0 01.105-2.004H1a1 1 0 01-.117-1.993L1 9.996l3.668-.001a9.513 9.513 0 017.338-5.878l-.004-.058L12 3h-1a1 1 0 010-2h5zm-2.5 5a7.5 7.5 0 100 15 7.5 7.5 0 000-15zM13 9a1 1 0 011 1v3h2a1 1 0 010 2h-3a1 1 0 01-1-1v-4a1 1 0 011-1z"
      />
    </svg>
  )
}

export default SvgRush

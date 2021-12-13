import * as React from 'react'

function SvgGift(props: React.SVGProps<SVGSVGElement>) {
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
        d="M16.5 1a3.5 3.5 0 013.163 5.001L21 6a2 2 0 011.995 1.85L23 8v3a2 2 0 01-.999 1.732L22 20a3 3 0 01-2.824 2.995L19 23H5a3 3 0 01-2.995-2.824L2 20v-7.268a2 2 0 01-.993-1.563L1 11V8a2 2 0 011.85-1.995L3 6l1.337.001A3.5 3.5 0 017.5 1c1.815 0 3.297 1.208 4.5 3.497C13.203 2.207 14.685 1 16.5 1zM11 13H4v7a1 1 0 00.77.974l.113.02L5 21h6v-8zm9 0h-7v8h6a1 1 0 00.993-.883L20 20v-7zm-9-5H3v3h8V8zm10 3V8h-8v3h8zm-4.5-8c-.988 0-1.962.853-2.864 2.687L13.487 6H16.5a1.5 1.5 0 001.473-1.215l.02-.14L18 4.5A1.5 1.5 0 0016.5 3zm-9 0A1.5 1.5 0 006 4.5l.007.144A1.5 1.5 0 007.5 6h3.013l-.027-.057C9.55 3.932 8.533 3 7.5 3z"
      />
    </svg>
  )
}

export default SvgGift

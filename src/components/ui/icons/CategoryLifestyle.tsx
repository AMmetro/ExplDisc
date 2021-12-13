import * as React from 'react'

function SvgCategoryLifestyle(props: React.SVGProps<SVGSVGElement>) {
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
        d="M19.527 10l-3.615 2.637a1.775 1.775 0 00-.643 1.976l1.382 4.27-3.609-2.632a1.764 1.764 0 00-2.086.002l-3.607 2.63 1.38-4.265a1.777 1.777 0 00-.642-1.981L4.472 10H8.94a1.77 1.77 0 001.68-1.227L12 4.513l.549 1.695a1 1 0 001.902-.616l-.61-1.888c-.58-1.787-3.102-1.787-3.681 0L8.769 8H4.292c-1.88 0-2.662 2.403-1.143 3.51l3.628 2.646-1.393 4.304c-.578 1.782 1.462 3.265 2.977 2.16L12 17.966l3.647 2.66c1.511 1.103 3.548-.377 2.973-2.158l-1.397-4.312 3.633-2.65C22.373 10.4 21.592 8 19.714 8H15a1 1 0 000 2h4.527z"
      />
    </svg>
  )
}

export default SvgCategoryLifestyle

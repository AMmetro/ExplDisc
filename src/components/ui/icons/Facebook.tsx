import * as React from 'react'

function SvgFacebook(props: React.SVGProps<SVGSVGElement>) {
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
        d="M12.604 20.002l-3.231-.027v-7.318H7V9.494h2.373V7.972c0-2.968 1.368-4.472 3.91-4.472.634 0 1.144.027 1.58.074.15.017.241.029.423.055l.214.03v2.792h-1.824c-.705 0-1.072.676-1.072 1.838v1.205h2.91l-.462 3.163h-2.448v7.345z"
      />
    </svg>
  )
}

export default SvgFacebook

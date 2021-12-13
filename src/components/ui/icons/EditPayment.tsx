import * as React from 'react'

function SvgEditPayment(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        d="M16.95 2.869a2.966 2.966 0 014.042-.142l.143.133.156.166a2.925 2.925 0 01-.032 3.855l-.133.14L10.983 17H7v-4.176L12.821 7H4v12h16v-8.99a1 1 0 011.993-.118l.007.117V19a2 2 0 01-1.85 1.995L20 21H4a2 2 0 01-1.995-1.85L2 19V7a2 2 0 011.85-1.995L4 5h10.82l2.13-2.131zm-.797 3.626L9 13.652V15h1.164l7.306-7.188-1.317-1.317zm3.48-2.296a.965.965 0 00-1.178.004l-.09.08-.798.797 1.329 1.328.828-.813a.926.926 0 00.162-1.106l-.066-.102-.08-.094-.106-.094z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default SvgEditPayment

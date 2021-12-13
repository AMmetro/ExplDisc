import {Link} from './Link'
import {ArrowRight} from './ui/icons'

type ArrowRightLinkProps = {
  href: string
}

export function ArrowRightLink({href}: ArrowRightLinkProps) {
  return (
    <Link href={href}>
      <a className="group">
        <ArrowRight className="text-24 text-orange-hover transform duration-100 group-hover:translate-x-2" />
      </a>
    </Link>
  )
}

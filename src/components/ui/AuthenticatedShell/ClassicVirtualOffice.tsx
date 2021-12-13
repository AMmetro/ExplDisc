import type {ReactNode} from 'react'
import {FormattedMessage} from 'react-intl'

import {Link} from '../../Link'
import {InformationSmall} from '../icons'

type Props = {
  href: string
}

export function ClassicVirtualOffice({href}: Props) {
  return (
    <div className="max-w-screen-md mx-auto flex justify-center">
      <div className="flex justify-center items-center">
        <span className="mr-1">
          <InformationSmall className="w-6 h-6 text-grey-2" />
        </span>
        <p className="text-center text-14 text-grey-2">
          <FormattedMessage
            id="cdd2607a3110"
            defaultMessage="Don't want to use the new design yet? Return to <a>Classic Virtual Office</a>"
            description="Prompt to visit the old virtual office"
            values={{
              // eslint-disable-next-line react/display-name
              a: (chunks: ReactNode) => (
                <Link href={href}>
                  <a className="text-orange">{chunks}</a>
                </Link>
              ),
            }}
          />
        </p>
      </div>
    </div>
  )
}

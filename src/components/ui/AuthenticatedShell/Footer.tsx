import classNames from 'classnames'
import type {MessageDescriptor} from 'react-intl'
import {defineMessages, FormattedMessage} from 'react-intl'

import type {
  LegalLink,
  LegalLinkType,
} from '../../../lib/juiceplus/authenticatedShell'
import {Link} from '../../Link'

type LegalLinkLabels = {
  [key in LegalLinkType]: MessageDescriptor
}

const legalLinkLabels: LegalLinkLabels = defineMessages({
  'terms-of-use': {
    id: 'd25700310c44',
    defaultMessage: 'Terms of Use',
    description: 'label for terms of use footer link',
  },
  'privacy-policy': {
    id: '09b7d58e6743',
    defaultMessage: 'Privacy Policy',
    description: 'label for privacy policy footer link',
  },
  'return-policy': {
    id: '4d029663cd6b',
    defaultMessage: 'Return Policy',
    description: 'label for return policy footer link',
  },
  'terms-of-service': {
    id: '8f7e1f044fc1',
    defaultMessage: 'Terms of Service',
    description: 'label for terms of service footer link',
  },
})

type LegalLinksProps = {
  links: LegalLink[]
}

function LegalLinks({links}: LegalLinksProps) {
  return (
    <>
      {links.map((link, index) => (
        <Link key={link.href} href={link.href}>
          <a
            className={classNames(
              'font-heading text-center text-14 text-grey-2 hover:text-orange',
              {'ml-8': index > 0}
            )}
          >
            <FormattedMessage {...legalLinkLabels[link.type]} />
          </a>
        </Link>
      ))}
    </>
  )
}

function Copyright() {
  return (
    <p className="text-center text-13 text-grey-3 font-heading">
      <FormattedMessage
        id="981dd6ac2df8"
        defaultMessage="© {year}: Juice Plus+® is the owner of all rights concerning all photos, designs and text on the website www.juiceplus.com. Juice Plus+® is a registered trademark of the The Juice Plus+® Company"
        description="copyright text for portal footer"
        values={{year: 2020}}
      />
    </p>
  )
}

type Props = {
  legalLinks: LegalLink[]
}

export function Footer({legalLinks}: Props) {
  return (
    <div className="grid grid-cols-1 gap-4">
      <hr className="border-orange-background-hover border-t-2" />
      <div className="max-w-screen-md mx-auto">
        <LegalLinks links={legalLinks} />
      </div>

      <div className="max-w-screen-md mx-auto">
        <Copyright />
      </div>
    </div>
  )
}

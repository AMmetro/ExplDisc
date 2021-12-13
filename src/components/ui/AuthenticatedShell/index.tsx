import type {PropsWithChildren} from 'react'

import type {AuthenticatedShellContent} from '../../../lib/juiceplus/authenticatedShell'
import type {ActivePartner} from '../../../lib/user'
import {ClassicVirtualOffice} from './ClassicVirtualOffice'
import {Footer} from './Footer'
import {Navigation} from './Navigation'
import {NeedHelp} from './NeedHelp'

type Props = PropsWithChildren<{
  user: ActivePartner
  content: AuthenticatedShellContent
}>

export function AuthenticatedShell({children, user, content}: Props) {
  return (
    <>
      <Navigation user={user} />

      {children}

      <div className="py-8 grid grid-cols-1 gap-4">
        <NeedHelp {...content.gettingStartedEndpoints} />
        <ClassicVirtualOffice {...content.classicVirtualOffice} />

        <Footer legalLinks={content.footerLegalLinks} />
      </div>
    </>
  )
}

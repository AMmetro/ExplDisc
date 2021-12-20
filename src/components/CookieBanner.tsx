import {Transition} from '@headlessui/react'
import cookie from 'cookie'
import type {FormEvent, ReactNode} from 'react'
import {useState} from 'react'
import {FormattedMessage} from 'react-intl'

import {Link} from './Link'

type Props = {
  href: string
  show: boolean
  returnTo?: string
}

export function CookieBanner({href, show: defaultShow, returnTo = '/'}: Props) {
  let [show, setShow] = useState(defaultShow)
  let onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    document.cookie = cookie.serialize('CookiesAccepted', 'true', {
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
    })
    setShow(false)
  }

  return (
    <Transition
      className="sticky z-20 bottom-0 left-0 right-0 bg-emerald"
      enter="transform duration-500 ease-in-out"
      enterFrom="translate-y-full"
      leave="transform duration-150 ease-in-out"
      leaveTo="translate-y-full"
      show={show}
      appear
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-grey-5 text-14">
          <FormattedMessage
            id="93ac0619f326"
            defaultMessage="This website uses cookies to enhance your experience. If you continue without changing your settings, you are consenting to the use of cookies on the website. To learn more about cookies, changing your settings, or review our privacy policy click <a>here</a>."
            description="Cookie banner message"
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

        <div className="my-2 md:m-10" />

        <form
          className="flex-shrink-0 inline-flex"
          action="accept-cookies"
          method="post"
          onSubmit={onSubmit}
        >
          <input type="hidden" name="returnTo" value={returnTo} />
          <button
            type="submit"
            className="uppercase text-grey-5 font-semibold rounded-full py-2 px-6 text-14 bg-orange"
          >
            <FormattedMessage
              id="dfbbc4de3285"
              defaultMessage="Got it"
              description="Acknowledge cookie message"
            />
          </button>
        </form>
      </div>
    </Transition>
  )
}

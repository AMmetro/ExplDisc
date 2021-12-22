import Head from 'next/head'
import type {FormEvent} from 'react'
import {useState} from 'react'
import {FormattedMessage, useIntl, defineMessages} from 'react-intl'

import {Link} from '../../../../components/Link'
import JuicePlusLogo from '../../../../components/icons/JuicePlusLogo'
import {AnonymousShell} from '../../../../components/ui/AnonymousShell'
import {
  Profile as ProfileIcon,
  Password as PasswordIcon,
} from '../../../../components/ui/icons'
import {useRouter} from '../../../../lib/router'
import type {Router} from '../../../../lib/router'

const SKIP_LICENSE_RENEWAL_STORAGE_KEY = 'skipLicenseRenewal'

let messages = defineMessages({
  usernameRequired: {
    defaultMessage: 'Please enter a valid Username.',
    description: 'Error to prompt providing a username',
    id: '018ad327e413',
  },
  passwordRequired: {
    defaultMessage: 'Please enter your Password.',
    description: 'Error to prompt providing a password',
    id: '22916338c4f3',
  },
})

const urlModifiers = ['loggedOut', 'sessionExpired', 'resetPassword'] as const
type UrlModifier = typeof urlModifiers[number]

export default function PartnerLogin() {
  let intl = useIntl()
  let router = useRouter()
  let urlModifier = parseUrlModifier(router)
  let [isSubmitting, setIsSubmitting] = useState(false)
  let [data, setData] = useState({
    username: '',
    password: '',
    rememberMe: false,
  })
  let [errors, setErrors] = useState({
    login: false,
    username: '',
    password: '',
  })
  const setUsername = (username: string) =>
    setData((data) => ({...data, username}))
  const setPassword = (password: string) =>
    setData((data) => ({...data, password}))
  const setRememberMe = (rememberMe: boolean) =>
    setData((data) => ({...data, rememberMe}))

  let onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(async () => {
      try {
        const response = await fetch('/api/authenticate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify(data),
        })
        if (!response.ok) {
          console.error(await response.json())
          setErrors({...errors, login: true})
          setIsSubmitting(false)
          return
        }
        localStorage.removeItem(SKIP_LICENSE_RENEWAL_STORAGE_KEY)
        await router.push('/portal')
      } catch (e) {
        console.error(e)
        setErrors({...errors, login: true})
        setIsSubmitting(false)
      }
    }, 300)
  }

  return (
    <>
      <Head>
        <title>
          {intl.formatMessage({
            defaultMessage: 'Login • JuicePlus+',
            id: 'cb9cbcb6ad6b',
            description: 'Login page title',
          })}
        </title>
        <meta
          name="description"
          content={intl.formatMessage({
            defaultMessage: 'Login to your JuicePlus+ account',
            id: 'b84f64280199',
            description: 'Login page description',
          })}
        />
      </Head>

      <AnonymousShell>
        <main className="flex-1 flex flex-col relative bg-orange-background overflow-hidden py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMaxYMin"
            viewBox="0 0 1440 600"
            className="absolute top-0 text-white"
          >
            <path
              fillRule="evenodd"
              fill="currentColor"
              d="M0,9.66338121e-13 L1440,9.66338121e-13 L1440,386.250381 C1228.65732,278.033993 975.363005,253.313353 734.228988,337.308593 L726.925674,339.887206 L0,600 L0,9.66338121e-13 Z"
            />
          </svg>

          <div className="flex-1 z-10">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-right text-14 font-light py-4">
                Click here to switch to{' '}
                <Link href="/login/customer">
                  <a className="text-orange">Customer Login</a>
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="grid grid-cols-1 gap-5 self-start bg-white rounded-lg shadow p-6">
                  <h1 className="text-30 text-gray-700 font-bold text-center">
                    <FormattedMessage
                      id="4c0a0cc7cf2d"
                      defaultMessage="Login"
                      description="Login title"
                    />
                  </h1>

                  {urlModifier && (
                    <UrlModifierInfoMessage modifier={urlModifier} />
                  )}

                  {errors.login && (
                    <div className="bg-red-100 p-3 rounded-sm">
                      <div className="text-13 text-error text-center">
                        <FormattedMessage
                          id="5621760fd7fd"
                          defaultMessage="The login credentials you used are not correct, please try again or reset your password. If issues persist please contact Partner Support."
                          description="Error logging in"
                        />
                      </div>
                    </div>
                  )}

                  <form onSubmit={onSubmit}>
                    <div>
                      <label htmlFor="username" className="sr-only">
                        <FormattedMessage
                          id="3ee68d00be4a"
                          defaultMessage="Username"
                          description="Username label"
                        />
                      </label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <ProfileIcon className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          id="username"
                          name="username"
                          type="text"
                          autoComplete="username"
                          className="focus:ring-orange focus:border-orange block w-full pl-10 text-18 border-gray-300 rounded-md placeholder-gray-300"
                          placeholder={intl.formatMessage({
                            defaultMessage: 'Username',
                            id: '82bf56f3e6eb',
                            description: 'Username placeholder',
                          })}
                          value={data.username}
                          onChange={(e) => setUsername(e.currentTarget.value)}
                        />
                      </div>
                      {errors.username === 'usernameRequired' ? (
                        <p className="mt-2 text-14 text-error">
                          <FormattedMessage {...messages.usernameRequired} />
                        </p>
                      ) : null}
                    </div>

                    <div className="my-2" />

                    <div>
                      <label htmlFor="password" className="sr-only">
                        <FormattedMessage
                          id="48be8ed9c7cb"
                          defaultMessage="Password"
                          description="Password label"
                        />
                      </label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <PasswordIcon className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          id="password"
                          name="password"
                          type="password"
                          className="focus:ring-orange focus:border-orange block w-full pl-10 text-18 border-gray-300 rounded-md placeholder-gray-300"
                          placeholder={intl.formatMessage({
                            defaultMessage: 'Password',
                            id: 'f8718d9f475c',
                            description: 'Password placeholder',
                          })}
                          value={data.password}
                          onChange={(e) => setPassword(e.currentTarget.value)}
                        />
                      </div>
                      {errors.password === 'passwordRequired' ? (
                        <p className="mt-2 text-14 text-error">
                          <FormattedMessage {...messages.passwordRequired} />
                        </p>
                      ) : null}
                    </div>

                    <div className="my-4" />

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          id="rememberMe"
                          name="rememberMe"
                          type="checkbox"
                          className="h-4 w-4 text-orange focus:ring-orange border-gray-300 rounded"
                          checked={data.rememberMe}
                          onChange={(e) =>
                            setRememberMe(e.currentTarget.checked)
                          }
                        />
                        <label
                          htmlFor="rememberMe"
                          className="ml-2 block text-14 font-light text-gray-900"
                        >
                          <FormattedMessage
                            id="5779e7f01348"
                            defaultMessage="Remember me"
                            description="Ask if user wants to be remembered across visits"
                          />
                        </label>
                      </div>

                      <div className="text-md">
                        <Link href="/login/forgot-password">
                          <a className="font-medium text-orange">
                            <FormattedMessage
                              id="eb30d170b309"
                              defaultMessage="Forgot Password?"
                              description="Link to reset password if forgotten"
                            />
                          </a>
                        </Link>
                      </div>
                    </div>

                    <div className="my-4" />

                    <div>
                      <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-full shadow-sm text-md font-semibold uppercase text-white bg-orange hover:bg-yellow-700 disabled:hover:bg-orange disabled:hover:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                        disabled={isSubmitting}
                      >
                        {isSubmitting
                          ? '...'
                          : intl.formatMessage({
                              defaultMessage: 'Login',
                              id: 'bea86ab3c997',
                              description: 'Login call-to-action button',
                            })}
                      </button>
                    </div>
                  </form>
                </div>

                <div className="col-span-1 flex flex-col bg-white rounded-lg shadow p-6">
                  <h1 className="text-30 text-gray-700 font-bold text-center">
                    <FormattedMessage
                      id="1683397dd770"
                      defaultMessage="Become a JuicePlus+ Partner"
                      description="Become a partner title"
                    />
                  </h1>

                  <div className="my-4" />

                  <p className="text-18 font-light text-gray-700 text-center">
                    Inspire healthy living among your friends, family and
                    community and earn extra money at the same time.
                  </p>

                  <div className="my-4" />

                  <Link href="/login/partner-sign-up">
                    <a className="inline-flex justify-center items-center uppercase px-6 py-2 border-2 border-transparent border-solid border-orange-background hover:border-orange-background-hover rounded-full text-md font-semibold text-orange cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-50">
                      <FormattedMessage
                        id="6473808c5ca0"
                        defaultMessage="Become a Partner"
                        description="Become a partner call-to-action button"
                      />
                    </a>
                  </Link>

                  <div className="my-4" />

                  <img
                    width={250}
                    height={140}
                    className="-mb-6 mx-auto"
                    src="https://juiceplus.scene7.com/is/image/juiceplus/test:16-9"
                    alt="healthy families"
                  />
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </AnonymousShell>
    </>
  )
}

function isValidUrlModifier(modifier: string): modifier is UrlModifier {
  return urlModifiers.includes(modifier as UrlModifier)
}

function parseUrlModifier(router: Router): UrlModifier | null {
  const {
    query: {modifier: urlModifierString},
  } = router

  if (
    typeof urlModifierString !== 'string' ||
    !isValidUrlModifier(urlModifierString)
  ) {
    return null
  }

  return urlModifierString
}

function UrlModifierInfoMessage({modifier}: {modifier: UrlModifier}) {
  return (
    <div className="bg-apple-background p-3 rounded-sm">
      <div className="text-13 text-apple text-center">
        {modifier === 'loggedOut' && (
          <FormattedMessage
            id="d18e58bd07f2"
            defaultMessage="You have successfully logged out."
            description="Successful logout message for login page"
          />
        )}
        {modifier === 'resetPassword' && (
          <FormattedMessage
            id="21c802561acd"
            defaultMessage="Please check your email for your password reset link."
            description="Reset password message for login page"
          />
        )}
        {modifier === 'sessionExpired' && (
          <FormattedMessage
            id="22da92f95afd"
            defaultMessage="Your session has expired. Please log in again."
            description="Session expired message for login page"
          />
        )}
      </div>
    </div>
  )
}

const navigation = {
  links: [
    {
      title: 'Company',
      links: [
        {name: 'About Us', href: '/what-is-juice-plus/about-us'},
        {name: 'Giving Back', href: '/what-is-juice-plus/giving-back'},
        {name: 'Contact Us', href: '/contact-us'},
      ],
    },
    {
      title: 'JuicePlus+',
      links: [
        {
          name: 'How Capsules are Made',
          href: '/products/how-juice-plus-capsules-are-made',
        },
        {name: 'Clinical Research', href: '/products/clinical-research'},
        {name: 'NSF Certification', href: '/products/nsf-certification'},
      ],
    },
    {
      title: 'Resources',
      links: [
        {name: 'One Simple Change', href: '/live-better/one-simple-change'},
        {
          name: 'Healthy Starts for Families',
          href: '/live-better/healthy-family',
        },
        {
          name: 'Athletic Performance',
          href: '/what-is-juice-plus/athletic-performance',
        },
      ],
    },
    {
      title: 'More',
      links: [{name: 'Tower Garden', href: 'https://www.towergarden.com'}],
    },
  ],
  social: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/juiceplus.us',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/juiceplus_us',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Youtube',
      href: 'https://www.youtube.com/user/OfficialJuicePlus',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M22.5048124,6.40557992 C22.9752071,8.12365984 22.9572983,11.7048915 22.9572983,11.7048915 C22.9572983,11.7048915 22.9572983,15.2678637 22.5049799,16.9861111 C22.2516904,17.9265656 21.5102492,18.6681743 20.5696272,18.9212963 C18.8513798,19.3735989 11.9785575,19.3735989 11.9785575,19.3735989 C11.9785575,19.3735989 5.12365984,19.3735989 3.38748782,18.9033717 C2.44686585,18.6500822 1.7054246,17.9084734 1.45213512,16.968019 C1,15.2678637 1,11.6867995 1,11.6867995 C1,11.6867995 1,8.12365984 1.45213512,6.40557992 C1.70525704,5.46512547 2.46495796,4.7054246 3.38732031,4.45230263 C5.10556774,4 11.97839,4 11.97839,4 C11.97839,4 18.8513798,4 20.5696272,4.47022723 C21.5100816,4.7235167 22.2516904,5.46495796 22.5048124,6.40557992 Z M9.79008285,14.9785575 L15.5053454,11.6867995 L9.79008285,8.39504142 L9.79008285,14.9785575 Z" />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/juiceplus',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
  ],
  legal: [
    {name: 'Terms of Use', href: '/terms-of-use'},
    {name: 'Privacy Policy', href: '/privacy-cookie-policy'},
    {name: 'Return Policy', href: '/product-return-policy'},
  ],
}

function Footer() {
  return (
    <footer className="bg-white" aria-labelledby="footerHeading">
      <h2 id="footerHeading" className="sr-only">
        Footer
      </h2>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <JuicePlusLogo className="h-10 text-orange" />
            <p className="text-gray-500 text-14 font-light">
              JuicePlus+ delivers concentrated plant-based nutrition that helps
              you “bridge the gap” between what you should eat – and what you do
              eat – every day.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <Link key={item.name} href={item.href}>
                  <a className="text-orange">
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-4 gap-8 xl:mt-0 col-span-2">
            {navigation.links.map((section) => (
              <div
                key={section.title}
                className="col-span-2 md:grid md:gap-8 lg:col-span-1"
              >
                <div>
                  <h3 className="text-14 font-semibold text-gray-400 tracking-wider uppercase">
                    {section.title}
                  </h3>
                  <ul className="mt-4 space-y-4">
                    {section.links.map((item) => (
                      <li key={item.name}>
                        <Link href={item.href}>
                          <a className="text-14 font-light text-gray-500 hover:text-orange">
                            {item.name}
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <nav className="-mx-5 -my-2 flex flex-wrap justify-center">
          {navigation.legal.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <Link href={item.href}>
                <a className="text-13 text-gray-500 hover:text-orange">
                  {item.name}
                </a>
              </Link>
            </div>
          ))}
        </nav>

        <div className="max-w-xl mx-auto">
          <p className="mt-8 text-center text-13 text-gray-400">
            © 2020: JuicePlus+® is the owner of all rights concerning all
            photos, designs and text on the website www.juiceplus.com. Juice
            Plus+® is a registered trademark of the The JuicePlus+® Company
          </p>
        </div>
      </div>

      <div className="max-w-xl mx-auto flex justify-center">
        <div>
          <Link href="/what-is-juice-plus/informed-choice">
            <a target="_blank" rel="noopener" className="p-4">
              <img
                width={100}
                height={60}
                src="https://juiceplus.scene7.com/is/image/juiceplus/juice-plus-informed-choice-horizontal-logo-rgb?wid=100&amp;fmt=png-alpha&amp;bfc=off&amp;_ck=1593964806147"
                title="Informed Choice"
                alt="Informed Choice"
              />
            </a>
          </Link>
        </div>

        <div className="mx-4" />

        <div>
          <Link href="https://www.institut-fresenius.de/en/">
            <a target="_blank" rel="noopener noreferrer" className="p-4">
              <img
                width={100}
                height={60}
                src="https://juiceplus.scene7.com/is/image/juiceplus/juice-plus-juice-olus-fresenius-mit-fundstellenverweis-e?wid=100&amp;fmt=png-alpha&amp;bfc=off&amp;_ck=1593964861113"
                title="Fersenius"
                alt="fersenius logo"
              />
            </a>
          </Link>
        </div>

        <div className="my-2" />
      </div>
    </footer>
  )
}

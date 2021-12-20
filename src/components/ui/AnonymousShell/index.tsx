import type {PropsWithChildren} from 'react'

import {Link} from '../../Link'
import JuicePlusLogo from '../../icons/JuicePlusLogo'
import {Search as SearchIcon, Cart as CartIcon} from '../icons'

export function AnonymousShell({children}: PropsWithChildren<unknown>) {
  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <nav className="bg-white shadow-md">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-2">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <JuicePlusLogo className="block h-12 w-auto text-orange" />
                </div>
              </div>

              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link href="/products">
                  <a className="inline-flex text-gray-500 items-center text-md hover:text-orange">
                    Our Products
                  </a>
                </Link>

                <Link href="/live-better">
                  <a className="inline-flex text-gray-500 items-center text-md hover:text-orange">
                    Live Better
                  </a>
                </Link>

                <Link href="/what-is-juice-plus">
                  <a className="inline-flex text-gray-500 items-center text-md hover:text-orange">
                    Who We Are
                  </a>
                </Link>

                <Link href="/join">
                  <a className="inline-flex text-gray-500 items-center text-md hover:text-orange">
                    Become a Partner
                  </a>
                </Link>
              </div>

              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <div>
                  <SearchIcon className="h-6 w-6 text-orange" />
                </div>

                <div className="mx-2" />

                <div className="relative">
                  <CartIcon className="h-6 w-6 text-orange" />

                  <span className="absolute h-4 w-4 top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-13 font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-orange rounded-full">
                    <span className="text-13">0</span>
                  </span>
                </div>

                <div className="mx-2" />

                <div>
                  <button
                    type="button"
                    className="inline-flex items-center px-6 py-2 border border-transparent text-md font-medium leading-5 rounded-full shadow-sm text-orange bg-orange-background hover:bg-orange-background focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-50"
                  >
                    Sign in
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {children}
    </div>
  )
}

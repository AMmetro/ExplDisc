import {useState} from 'react'
import {FormattedMessage} from 'react-intl'

import type {ActivePartner} from '../lib/user'
import PersonTypeAhead from './PersonTypeAhead'
import SvgNavigationClose from './ui/icons/NavigationClose'

type Props = {
  setShowModal(t: boolean): void
  submit: (name: string, id: string) => void
  user: ActivePartner
}

export function WhoHelpedModal({setShowModal, submit, user}: Props) {
  const [partner, setPartner] = useState(user.sponsor)
  const [partnerID, setPartnerID] = useState(user.partnerId)
  const [searching, setSearching] = useState(false)
  const canSubmit =
    partner.firstName.length > 0 && partnerID.length > 0 && !searching

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="w-[600px]  my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-2xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between rounded-t-2xl h-[68px] pt-4 pr-5 pb-4 pl-[30px] border-b border-t border-solid border-grey-5">
              <h3 className="text-24 font-bold font-heading text-emerald">
                <FormattedMessage
                  id="aeafac3969d0"
                  defaultMessage="Who helped you?"
                  description="Who helped modal title text"
                />
              </h3>

              <button
                className="background-transparent py-2 text-sm outline-none focus:outline-none mr-1 mb-1 text-24"
                type="button"
                onClick={() => setShowModal(false)}
              >
                <SvgNavigationClose />
              </button>
            </div>

            <div className="px-[30px] pt-5 flex-auto text-16 leading-8 font-body text-grey-1 whitespace-nowrap">
              <FormattedMessage
                id="4997e6663931"
                defaultMessage="You achieved a lot! And most likely some one helped you along...{br}Please let us know which partner helped you the most reaching your{br}promotion. We would like to reward her/him with a little something."
                description="Who helped Modal paragraph"
                values={{br: <br />}}
              />
            </div>
            <div className="px-[30px] pt-5 pb-[30px] flex-auto text-16 leading-8 font-body text-grey-1">
              <div className="flex flex-col text-grey-1 text-13">
                <PersonTypeAhead
                  sponsor={user.sponsor}
                  partnerId={user.partnerId}
                  setPartnerId={setPartnerID}
                  setPartner={setPartner}
                  setSearching={setSearching}
                />
              </div>
            </div>

            <div className="flex items-center min-h-[84px] justify-center py-5 border-t border-solid border-grey-5 rounded-b">
              <button
                className="h-[44px] min-w-[280px] bg-orange text-white font-heading font-bold rounded-full"
                onClick={() => submit(partner.firstName, partnerID)}
                disabled={!canSubmit}
              >
                <FormattedMessage
                  id="88ed280ee20d"
                  defaultMessage="CONFIRM"
                  description="Who helped confirmation button text"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black" />
    </>
  )
}

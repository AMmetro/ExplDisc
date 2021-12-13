import {screen} from '@testing-library/react'

import {renderForTest} from '../lib/renderForTest'
import {DashboardOverview} from './DashboardOverview'

describe('<DashboardOverview />', () => {
  const statInfo = {
    href: 'href',
    label: <p>React Node</p>,
    value: 100,
    percentage: 100,
  }
  const stats = {
    new: statInfo,
    total: statInfo,
  }
  const props = {
    header: 'This is the header',
    stats: {...stats},
    children: 'Children content',
  }

  test('should component render', () => {
    renderForTest(<DashboardOverview {...props} />)

    expect(screen.getByText('This is the header')).toBeInTheDocument()
    expect(screen.getByText('Children content')).toBeInTheDocument()
  })
})

import { render } from '@testing-library/react'

import { Logo } from './Logo'

describe('<Logo>', () => {
  it('renders correctly', () => {
    const view = render(<Logo />)
    expect(view).toMatchSnapshot()
  })
})

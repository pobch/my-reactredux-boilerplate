import React from 'react'
import { shallow } from 'enzyme'

import App from '../App'
import Home from '../components/Home'

let wrapped

beforeEach(() => {
  wrapped = shallow(<App />)
})

it('shows a Home component', () => {
  expect(wrapped.find(Home).length).toEqual(1)
})

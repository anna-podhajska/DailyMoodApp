import React from 'react'
import test from 'ava'
import { shallow, mount } from 'enzyme'

import Dailymoods from '../../client/components/Dailymoods'
import './setup-dom'

App.prototype.componentDidMount = () => {}

test('Hello World renders on App', t => {
  const wrapper = shallow(<Dailymoods />)
  t.is(wrapper.find('h4').text(), 'in')
})

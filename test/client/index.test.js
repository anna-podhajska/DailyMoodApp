import React from 'react'
import test from 'ava'
import { shallow, mount, render } from 'enzyme'

import {Provider} from 'react-redux'


import Dailymoods from '../../client/components/Dailymoods'
import './setup-dom'


Dailymoods.prototype.componentDidMount = () => {}

test('word in appears on h4 in Dailymoods component', t => {
  const wrapper = shallow(<Dailymoods />)
  t.is(wrapper.find('h4').text(), 'in')
})

//
// test('testing how mount works', t => {
//   const wrapper = mount(<Dailymoods />)
//
// })

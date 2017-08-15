import React from 'react'
import test from 'ava'
import { shallow, mount, render } from 'enzyme'

import {Provider} from 'react-redux'


import Dailymoods from '../../client/components/Dailymoods'
import './setup-dom'


Dailymoods.prototype.componentDidMount = () => {}

test('Add Mood has a form', t => {
  const wrapper = shallow(<Dailymoods />)
  t.is(wrapper.find('form').text(), '1')
})

//
// test('testing how mount works', t => {
//   const wrapper = mount(<Dailymoods />)
//
// })

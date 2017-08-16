import React from 'react'
import test from 'ava'
import { shallow, mount, render } from 'enzyme'
import {Provider} from 'react-redux'

import Dailymoods from '../../client/components/Dailymoods'
import './setup-dom'
import store from '../../client/store'


Dailymoods.prototype.componentDidMount = () => {}

test('there is a div with class testClass in Dailymoods component', t => {
  const wrapper = shallow(<Dailymoods store={store} />)
  t.is(wrapper.contains(<div className="testClass" />)).to.equal(true)
  // t.is(wrapper.find('Button').text(), 'in')
})

//
// test('mount', t => {
//   const wrapper = mount(<Dailymoods />)
//
// })

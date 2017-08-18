import React from 'react'
import test from 'ava'
import { shallow, mount, render } from 'enzyme'
import {Provider} from 'react-redux'

import Dailymoods from '../../../client/components/Dailymoods'
import '../setup-dom'
import store from '../../../client/store'

Dailymoods.prototype.componentDidMount = () => {}

test('checking if Dailymoods has h4 with mood_name', t => {
  let testMood = {username: "Bob", mood_name: 'Happy', location_name: "Wellington", created_at: "12/10/2017", mood_color: "#133445" }
  const wrapper = shallow(<Dailymoods store={store}
    dailymoods={[testMood]} />)
  t.is(wrapper.find('h4').text(), testMood.mood_name)
})

test('checking if Dailymoods has testClass', (t) => {
  let testMood = {username: "Bob", mood_name: 'Happy', location_name: "Wellington", created_at: "12/10/2017", mood_color: "#133445" }
  const wrapper = shallow(<Dailymoods store={store}
    dailymoods={[testMood]} />)
  const testClassInner = wrapper.find('.testClass');
  t.is(testClassInner.is('.testClass'), true);
})


//
// test('mount', (t) => {
//   const wrapper = mount(<Foo />);
//   const fooInner = wrapper.find('.foo-inner');
//   t.is(fooInner.is('.foo-inner'), true);
// });

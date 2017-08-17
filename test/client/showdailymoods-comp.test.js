import React from 'react'
import test from 'ava'
import { shallow, mount, render } from 'enzyme'
import {Provider} from 'react-redux'

import ShowUserMoods from '../../client/components/showUserMoods'
import './setup-dom'
import store from '../../client/store'

ShowUserMoods.prototype.componentDidMount = () => {}

test('shallow /testing ShowUserMoods component', t => {

  const wrapper = shallow(<ShowUserMoods store={store} />)
  t.is(wrapper.find('h6').text(), "hello, i am a new component")

})



//
// test('mount', (t) => {
//   const wrapper = mount(<Foo />);
//   const fooInner = wrapper.find('.foo-inner');
//   t.is(fooInner.is('.foo-inner'), true);
// });

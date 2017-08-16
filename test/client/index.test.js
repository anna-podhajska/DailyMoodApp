import React from 'react'
import test from 'ava'
import { shallow, mount, render } from 'enzyme'
import {Provider} from 'react-redux'

import Dailymoods from '../../client/components/Dailymoods'
import './setup-dom'
import store from '../../client/store'


Dailymoods.prototype.componentDidMount = () => {}

test('testing Dailymoods component', t => {

  let testUser = {id: 1, username: 'Bob'}
  let testMood = {id: 2, mood_name: 'Happy'}
  let testLocation = {id: 3, location_name: "Wellington"}
  let testCreatedAt = {id: 4, created_at: "12/10/2017"}
  let testColor = {id: 5, mood_color: "#133445"}

  const wrapper = shallow(<Dailymoods store={store}
    moods={[testMood]} location={[testLocation]} created={[testCreatedAt]}/>)

  t.is(wrapper.contains(<div className="testClass" />)).to.equal(true)
  t.is(wrapper.find('h4').text(), 'mood name')



})

//
// test('mount', t => {
//   const wrapper = mount(<Dailymoods />)
//
// })

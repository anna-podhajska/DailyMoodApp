import React from 'react'
import test from 'ava'
import { shallow, mount, render } from 'enzyme'

import {Provider} from 'react-redux'

import SaveDailymood from '../../../client/components/SaveDailymood'
import '../setup-dom'
import store from '../../../client/store'


SaveDailymood.prototype.componentDidMount = () => {}

test('bunch of tests for SaveDailymood Component', t => {
  let testUser = {id: 1, username: 'Harrison'}
  let testMood = {id: 2, mood_name: 'Hangry'}
  let testLocation = {id: 3, location_name: 'Wellington'}

  const wrapper = shallow(<SaveDailymood store={store} users={[testUser]} moods={[testMood]} locations={[testLocation]}/>)
  t.is(wrapper.find('form').length, 1)
  t.is(wrapper.find('select').length, 3)

  let firstUser = wrapper.find('select').nodes[0].props.children[1][0].props
  t.is(firstUser.value, testUser.id)
  t.is(firstUser.children, testUser.username)

  let firstMood = wrapper.find('select').nodes[1].props.children[1][0].props
  t.is(firstMood.value, testMood.id)
  t.is(firstMood.children, testMood.mood_name)

  let firstLocation =
  wrapper.find('select').nodes[2].props.children[1][0].props
  t.is(firstLocation.value, testLocation.id)
  t.is(firstLocation.children, testLocation.location_name)


  // console.log(wrapper.find('select').nodes[2]);
})

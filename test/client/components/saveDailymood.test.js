import React from 'react'
import test from 'ava'
import { shallow, mount, render } from 'enzyme'
import sinon from 'sinon'
import nock from 'nock'

import {Provider} from 'react-redux'

import '../setup-dom'
import store from '../../../client/store'
import SaveDailyMoods from '../../../client/containers/SaveDailymoods'


SaveDailyMoods.prototype.componentDidMount = () => {}

test('bunch of tests for SaveDailymood Component', t => {
  let testUser = {id: 1, username: 'Harrison'}
  let testMood = {id: 2, mood_name: 'Hangry'}
  let testLocation = {id: 3, location_name: 'Wellington'}

  const wrapper = shallow(<SaveDailyMoods store={store} users={[testUser]} moods={[testMood]} locations={[testLocation]} />)

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


test.cb('updates state when field changes', (t) => {
  nock('http://localhost:80')
    .get('/api/dailymoods/1')
    .reply(200, {name: 'user_id', value: 1})
  //props setup:
  let testUser = {id: 1, username: 'Harrison'}
  let testMood = {id: 2, mood_name: 'Hungry'}
  let testLocation = {id: 3, location_name: 'Wellington'}
  // ----
  const fakeDispatch = sinon.stub()
  store.dispatch = fakeDispatch

  const wrapper = mount(<SaveDailyMoods store={store} users={[testUser]} moods={[testMood]} locations={[testLocation]}/>)
  const event = {target: {name: 'user.id', value: 1}}

  wrapper.find('select[name="user_id"]').simulate('change', event)
  wrapper.find('form').simulate('submit')
  const action = fakeDispatch.args[0][0]
  action((actual) => {
    t.deepEqual(actual, {
      type: 'RECEIVE_MOODS_FOR_USER',
      moods_forUser: {name: 'user_id', value: 1}
    })
    t.end()

  })
})

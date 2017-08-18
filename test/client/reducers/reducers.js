import React from 'react'
import test from 'ava'

import dailymoods from "../../reducers/dailymoods"
import locations from "../../reducers/locations"

import {receiveDailyMOodsAction} from "../../actions/dailymoods."
import {receiveLocationsAction} from "../../actions/locationActionsś"

test('testing receiveDailyMoodsAction', (t) => {
  const initialState = []
  const action = dailymoods({mood_name: "Good"})
  const nextState = receiveDailyMOodsAction(initialState, action)

  t.deepEqual(nextState, {mood_name: "Good"})
})

test('testing locations action', (t) => {
  const initialState = []
  const action = locations({id: 1, location_name: "Wellington CBD"})
  const nextState = receiveLocationsAction(initialState, action)
})

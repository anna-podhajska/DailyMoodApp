import React from 'react'
import test from 'ava'

import dailymoods from "../../reducers/dailymoods"
import {receiveDailyMOodsAction} from "../../actions/dailymoods."

test('testing receiveDailyMoodsAction', (t) => {
  const initialState = []
  const action = dailymoods({mood_name: "Good"})
  const nextState = receiveDailyMOodsAction(initialState, action)

  t.deepEqual(nextState, {mood_name: "Good"})
})

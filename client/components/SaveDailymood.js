import React from 'react'
import {Alert, DropdownButton, MenuItem, SplitButton} from 'react-bootstrap'

import {getMoods_forUser} from "../actions/moods_forUser"
import {dailymoods} from "../actions/dailymoods"
import {locations} from "../actions/locationActions"
import {saveDailyMood} from "../actions/savedailymood"


export default class SaveDailyMoods extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        newMood: {
          mood_id: 0,
          location_id: 0,
          user_id: 0,
        }
      }
    }

    submitDetails = (e) => {
      e.preventDefault()
      let {newMood} = this.state
      this.props.dispatch(saveDailyMood(newMood))
    }
    updateDetails = (e) => {
      let {newMood} = this.state
      newMood[e.target.name] = e.target.value
      this.setState({newMood})
    }
    updateDetailsForUser = (e) =>{
      this.updateDetails(e)
      this.props.dispatch(getMoods_forUser(e.target.value))
    }

    render() {
      const renderMoodOption = (mood, i) =>
        <option key={i} value={mood.id}>{mood.mood_name}</option>
      const renderLocationOption = (location, i) =>
        <option key={i} value={location.id}>{location.location_name}</option>
      const renderUserOption = (user, i) =>
        <option key={i} value={user.id}>{user.username}</option>

        console.log(Object.keys(this.props))
        console.log(this.props.users)
      return (
        <div className="saveDailymoodsForm">
          {/* <Alert> */}
            <form onSubmit={this.submitDetails.bind(this)}>
              <select name="user_id" onChange={this.updateDetailsForUser.bind(this)}>
                <option> choose your name </option>
                {this.props.users.map(renderUserOption)}
              </select>
              <select name="mood_id" onChange={this.updateDetails.bind(this)}>
                <option> choose your mood </option>
                {this.props.moods.map(renderMoodOption)}
              </select>
              <select name="location_id" onChange={this.updateDetails.bind(this)}>
                <option> choose your location </option>
                {this.props.locations.map(renderLocationOption)}
              </select>
              <input type="submit" value="submit"/>
            </form>
          {/* </Alert> */}
        </div>
      )
    }
}

import React from 'react'
import {connect} from 'react-redux'
import {Alert, DropdownButton, MenuItem, SplitButton} from 'react-bootstrap'

import {dailymoods} from "../actions/dailymoods"
import {locations} from "../actions/locationActions"
import {saveDailyMoodAction} from "../actions/savedailymood"


class SaveDailyMoods extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        newMood: {
          user_id: 0,
          mood_id: 0,
          location_id: 0
        }
      }
    }

    submitDetails = (e) => {
      e.preventDefault()
      let {newMood} = this.state
      this.props.dispatch(submitDetails(newMood))
    }

    updateDetails = (e) => {
      let {newMood} = this.state
      newUser[e.target.name] = e.target.value
      this.setState({newMood})
    }

    render() {

      const renderMoodOption = (mood, i) =>
        <option key={i} value={mood.mood_id}>{mood.mood_name}</option>
      const renderLocationOption = (location, i) =>
        <option key={i} value={location.id}>{location.location_name}</option>
      const renderUserOption = (user, i) =>
        <option key={i} value={user.id}>{user.username}</option>

      return (
        <div>
          <Alert>
            <form onSubmit={this.submitDetails.bind(this)}>
              <select>
                <option> choose your name </option>
                {this.props.users.map(renderUserOption)}
              </select>
              <select>
                <option> choose your mood </option>
                {this.props.moods.map(renderMoodOption)}
              </select>
              <select>
                <option> choose your location </option>
                {this.props.locations.map(renderLocationOption)}
              </select>
              <input type="submit" value="submit"/>
            </form>
          </Alert>
        </div>
      )
    }
}

const mapStateToProps = ({moods, locations, users}) => {
    // console.log({moods});
    // console.log({locations});
    // console.log({users});
  return {moods, locations, users}
}

export default connect(mapStateToProps)(SaveDailyMoods)

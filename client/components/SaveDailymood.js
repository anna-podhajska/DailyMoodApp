import React from 'react'
import {connect} from 'react-redux'
import {Alert, DropdownButton, MenuItem, SplitButton} from 'react-bootstrap'

import {dailymoods} from "../actions/dailymoods"
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
      const renderMoodOption = (mood, i) => <option key={i} value={mood.mood_id}>{mood.mood_name}</option>
      return (
        <div>
          <Alert>
            <form onSubmit={this.submitDetails.bind(this)}>
              <select>
                <option> choose your name </option>
              </select>
              <select>
                <option> choose your mood </option>
                {this.props.moods.map(renderMoodOption)}
              </select>
              <select>
                <option> choose your location </option>
              </select>
              <input type="submit" value="submit"/>
            </form>
          </Alert>
        </div>
      )
    }
}

const mapStateToProps = ({moods}) => {
  console.log({moods});
  return {moods}
}
export default connect(mapStateToProps)(SaveDailyMoods)

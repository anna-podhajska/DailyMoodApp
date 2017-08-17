import {connect} from 'react-redux'
import SaveDailyMood from '../components/SaveDailymood'

const mapStateToProps = ({moods, locations, users}) => {
  return {moods, locations, users}
}

export default connect(mapStateToProps)(SaveDailyMood)

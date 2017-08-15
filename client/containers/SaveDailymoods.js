import {connect} from 'react-redux'
import SaveDailyMoods from '../components/SaveDailyMoods'

const mapStateToProps = ({moods, locations, users}) => {
    // console.log({moods});
  return {moods, locations, users}
}

export default connect(mapStateToProps)(SaveDailyMoods)

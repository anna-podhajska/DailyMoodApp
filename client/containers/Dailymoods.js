import {connect} from 'react-redux'
import DailyMoods from '../components/DailyMoods'

const mapStateToProps = (state) => {
  return {dailymoods: state.dailymoods }
}

export default connect (mapStateToProps) (DailyMoods)

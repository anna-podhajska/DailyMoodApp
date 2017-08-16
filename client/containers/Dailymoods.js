import {connect} from 'react-redux'
import DailyMoods from '../components/DailyMoods'

const mapStateToProps = (state) => {
  console.log(state);
  return {dailymoods: state.dailymoods }
}

export default connect (mapStateToProps) (DailyMoods)

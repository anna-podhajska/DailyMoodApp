import {connect} from 'react-redux'
import ButtonDailymoods from '../components/ButtonDailymoods'

const mapStateToProps = (state) => {
  return {buttondailymoods: state.dailymoods }
}

export default connect (mapStateToProps) (ButtonDailymoods)

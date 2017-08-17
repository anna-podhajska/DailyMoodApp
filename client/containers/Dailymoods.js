import {connect} from 'react-redux'
import Dailymoods from '../components/Dailymoods'

const mapStateToProps = (state) => {
  return {dailymoods: state.dailymoods }
}

export default connect (mapStateToProps) (Dailymoods)

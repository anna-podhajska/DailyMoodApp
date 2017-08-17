import {connect} from 'react-redux'
import ShowUserMoods from '../components/ShowUserMoods'

const mapStateToProps = (state) => {
  return {usermoods: state.moods_forUser}
}

export default connect(mapStateToProps)(ShowUserMoods)

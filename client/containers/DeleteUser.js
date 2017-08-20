import {connect} from 'react-redux'
import DeleteUser from '../components/DeleteUser'

const mapStateToProps (state) => {
  return {users: state.users}
}

export default connect (mapStateToProps)(DeleteUser)

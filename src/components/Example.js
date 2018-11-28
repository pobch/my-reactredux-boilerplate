import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { apiCall, normalAction } from '../actions'

/* eslint-disable */
class Example extends Component {
  render() {
    const { sampleStateKey, apiCall, normalAction } = this.props
    const { id } = this.props.match.params // url params by react-router-dom
    
    return (
      <div>
        <h5>This is a component</h5>
        <Link to="/home">This is a link</Link>
      </div>
    )
  }
}
/* eslint-enable */

const mapStateToProps = (state /* , ownProps = {} */) => {
  return {
    sampleStateKey: state.sampleStateKey // from reducers
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     apiCall: () => dispatch(apiCall()),
//     normalAction: () => dispatch(normalAction())
//   }
//   // OR return bindActionCreators() helper function
// }

export default connect(
  mapStateToProps,
  { apiCall, normalAction }
)(Example)

import React from 'react'
import { connect } from 'react-redux'
import { Api } from './api'

const Protected = ({ authData }) => {

  return (
    <div>{`Token: ${authData.token}`}</div>
  )
}
export default connect(state => ({ authData: state.user.data }))(Protected)

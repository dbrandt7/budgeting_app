import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

class Header extends Component {
  render() {
    return (
      <div>
        <div>Budgeting App (Selected User: {this.props.selectedUserName})</div>
        <Link to="/">
          Users
        </Link>
        |~|
        <Link to="/transactions">
          Transactions
        </Link>
        |~|
        <Link to="/createtransaction">
          Submit Transaction
        </Link>
      </div>
    )
  }
}

export default withRouter(Header)
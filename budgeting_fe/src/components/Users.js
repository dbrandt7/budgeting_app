import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import User from './User'

class Users extends Component {
  render() {
    if (this.props.usersQuery && this.props.usersQuery.loading) {
      return <div>Loading</div>
    }

    if (this.props.usersQuery && this.props.usersQuery.error) {
      return <div>Error</div>
    }

    const usersToRender = this.props.usersQuery.users

    return (
      <div>{usersToRender.map(user => <User key={user.id} user={user} />)}</div>
    )
  }
}

const USERS_QUERY = gql`
  query Users {
    users {
      id
      name
      email
    }
  }
`

export default graphql(USERS_QUERY, { name: 'usersQuery' }) (Users)
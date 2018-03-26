import React, { Component } from 'react'

class User extends Component {

  componentWillMount() {
    if (this.props.selectedUser === this.props.user.id) {
      this.props.changeUser(this.props.id, this.props.user.name)
    }
  }

  render() {
    return (
      <div>
        [{this.props.user.id}]{this.props.user.name} ({this.props.user.email})
            {(this.props.selectedUser !== this.props.user.id) && 
              <button onClick={this.props.changeUser}>
                Select User
              </button>
            }
      </div>
    )
  }
}

export default User
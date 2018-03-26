import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import '../styles/App.css';
import Header from './Header'
import Users from './Users'
import Transactions from './Transactions';
import CreateTransaction from './CreateTransaction';

class App extends Component {
  state = {
    selectedUser: "1",
    selectedUserName: ""
  }

  changeUser(userId, name) {
    this.setState({ 
      selectedUser: userId, 
      selectedUserName: name
    })
  }

  componentWillMount() {
    this.props.history.push("/")
  }

  render() {
    return (
      <div>
        <Header selectedUserName={this.state.selectedUserName} />
        <div>
          <Switch>
            <Route exact path="/" render={(props) => 
                <Users {...props} selectedUser={this.state.selectedUser} 
                    changeUser={(userId, name) => this.changeUser(userId, name)} />} />
            <Route exact path="/transactions" render={(props) => 
                <Transactions {...props} selectedUser={this.state.selectedUser} />}/>
            <Route exact path="/createtransaction" render={(props) => 
                <CreateTransaction {...props} selectedUser={this.state.selectedUser} />} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default withRouter(App);

import React, { Component } from 'react'
import { graphql } from 'react-apollo';
import gql from 'graphql-tag'

class CreateTransaction extends Component {
  state = {
    details: '',
    date: '',
    time: '',
    amount: '',
    userId: '',
    transactionTypeId: '1'
  }

  render() {
    return (
      <div>
        <div>
          <input
            value={this.state.details}
            onChange={e => this.setState({ details: e.target.value })}
            type="text"
            placeholder="Details for transaction"
          />
          <input
            value={this.state.date}
            onChange={e => this.setState({ date: e.target.value })}
            type="date"
          />
          <input
            value={this.state.time}
            onChange={e => this.setState({ time: e.target.value })}
            type="time"
          />
          <input
            value={this.state.amount}
            onChange={e => this.setState({ amount: e.target.value })}
            type="number"
            placeholder = "amount"
          />
          <input
            value={this.state.userId}
            onChange={e => this.setState({ userId: e.target.value })}
            type="number"
          />
          <select value={this.state.transactionTypeId} onChange={e=> this.setState({ transactionTypeId: e.target.value })}>
            <option value="1">Food</option>
            <option value="2">Travel</option>
            <option value="3">Bills</option>
            <option value="4">Entertainment</option>
          </select>
        </div>
        <button onClick={() => this._createTransaction()}>Submit</button>
      </div>
    )
  }

  _createTransaction = async () => {
    const { details, date, time, amount, userId, transactionTypeId  } = this.state
    let dateTime = new Date(date + " " + time)
    console.log(dateTime)
    await this.props.createTransaction({
        variables: {
            details,
            dateTime,
            amount,
            userId,
            transactionTypeId
        }
    })
  }
}

const CREATE_TRANSACTION = gql`
  mutation CreateTransaction($details: String!, $dateTime: Date!, 
        $amount: Float!, $userId: ID!, $transactionTypeId: ID!) {
    createTransaction(details: $details, date: $dateTime, amount: $amount, 
        userId: $userId, transactionTypeId: $transactionTypeId) {
      id
      details
    }
  }
`

export default graphql(CREATE_TRANSACTION,{ name: 'createTransaction'} )(CreateTransaction)
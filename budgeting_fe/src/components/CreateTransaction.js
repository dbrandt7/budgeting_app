import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag'

import { TRANSACTIONS_QUERY } from './Transactions'

class CreateTransaction extends Component {
  state = {
    details: '',
    date: '',
    time: '',
    amount: '',
    transactionTypeId: '1'
  }

  render() {
    if (this.props.transactionTypesQuery && this.props.transactionTypesQuery.loading) {
      return <div>Loading</div>
    }

    if (this.props.transactionTypesQuery && this.props.transactionTypesQuery.error) {
      return <div>Error</div>
    }
    const transactionsTypesToRender = this.props.transactionTypesQuery.transactionTypes
    
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
            placeholder = "Amount"
          />
          <select value={this.state.transactionTypeId} onChange={e=> this.setState({ transactionTypeId: e.target.value })}>
            {transactionsTypesToRender.map(transactionType => <option key={transactionType.id} value={transactionType.id}>{transactionType.name}</option>)}
          </select>
        </div>
        <button onClick={() => this._createTransaction()}>Submit</button>
      </div>
    )
  }

  _createTransaction = async () => {
    const { details, date, time, amount, transactionTypeId  } = this.state
    const userId  = this.props.selectedUser
    let dateTime = new Date(date + " " + time)
    await this.props.createTransaction({
        variables: {
            details,
            dateTime,
            amount,
            userId,
            transactionTypeId
        },
        update: (store, { data: { createTransaction } }) => {
          try {
            const data = store.readQuery({ query: TRANSACTIONS_QUERY, variables: { selectedUser: userId } })
            data.user.transactions.splice(0, 0, createTransaction) //For now add new entry to beginning of cache array for simplicity
            store.writeQuery({
              query: TRANSACTIONS_QUERY,
              variables: { selectedUser: userId },
              data
            })
          }
          catch (e) {
            console.log(e);
          }
        }
    })
    this.props.history.push("/transactions")
  }
}

const CREATE_TRANSACTION = gql`
  mutation CreateTransaction($details: String!, $dateTime: Date!, 
        $amount: Float!, $userId: ID!, $transactionTypeId: ID!) {
    createTransaction(details: $details, date: $dateTime, amount: $amount, 
        userId: $userId, transactionTypeId: $transactionTypeId) {
        id
        date
        details
        amount
        transactionType{
          name
        }
    }
  }
`

const TRANSACTION_TYPES_QUERY = gql`
  query TransactionTypes {
    transactionTypes{
      id
      name
    }
  }
`

export default compose(
  graphql(CREATE_TRANSACTION,{ name: 'createTransaction'} ),
  graphql(TRANSACTION_TYPES_QUERY,{ name: 'transactionTypesQuery'} )
)(CreateTransaction)
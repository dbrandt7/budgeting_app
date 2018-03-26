import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import Transaction from './Transaction'

class Transactions extends Component {
  render() {
    if (this.props.transactionsQuery && this.props.transactionsQuery.loading) {
      return <div>Loading</div>
    }

    if (this.props.transactionsQuery && this.props.transactionsQuery.error) {
      return <div>Error</div>
    }

    const transactionsToRender = this.props.transactionsQuery.user.transactions

    return (
      <ol>{transactionsToRender.map(transaction => <Transaction key={transaction.id} transaction={transaction} />)}</ol>
    )
  }

  _loadTransactions = async () => {
    const { selectedUser  } = this.props
    await this.props.transactionsQuery({
        variables: {
          selectedUser
        }
    })
  }
}

export const TRANSACTIONS_QUERY = gql`
  query Transactions($selectedUser: ID!) {
    user(id: $selectedUser){
      transactions{
        id
        date
        details
        amount
        transactionType{
          name
        }
      }
    }
  }
`

export default graphql(TRANSACTIONS_QUERY, { name: 'transactionsQuery' }) (Transactions)
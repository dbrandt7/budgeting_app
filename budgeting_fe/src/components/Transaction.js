import React, { Component } from 'react'

class Transaction extends Component {

    convertTime(serverdate) {
        let date = new Date(serverdate);
        // convert to utc time
        let utcDateString = date.toUTCString();
        //convert to local time
        let localDate = new Date(utcDateString + " UTC");
        return localDate;
    }

    render() {
        let localDate = this.convertTime(this.props.transaction.date)
        return (
        <li>
            {localDate.toLocaleString()}, 
            {this.props.transaction.details}, {this.props.transaction.amount},  
            {this.props.transaction.transactionType ? this.props.transaction.transactionType.name : ''}
        </li>
        )
    }
}

export default Transaction
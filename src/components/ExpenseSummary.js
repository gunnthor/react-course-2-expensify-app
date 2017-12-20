import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral'

export const ExpenseSummary = ({total, expensesCount}) => {
  let oneProp = (
    <h1>Viewing 1 expense totalling {numeral(total/100).format('$0,0.00')}</h1>
  );
  let moreProps = (
    <h1>Viewing {expensesCount} expenses totalling {numeral(total/100).format('$0,0.00')} </h1>
  )
  return (
  <div className="page-header">
    <div className="content-container">
      <h1 className="page-header__title"><span>{expensesCount > 0 && (expensesCount === 1 ? <div>{oneProp}</div> : <div>{moreProps}</div>)}</span> </h1>
      <div className="page-header__actions">
        <Link className="button" to="/create"> Add Expense </Link>
      </div>
    </div>
  </div>
)}

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters)
  return {
    total: selectTotal(visibleExpenses),
    expensesCount: visibleExpenses.length
  };
}; 

export default connect(mapStateToProps)(ExpenseSummary);
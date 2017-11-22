import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses.js';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';

const store = configureStore();

// store.subscribe(() => {
//   const state = store.getState();
//   const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//   // console.log(visibleExpenses);
// });

// store.dispatch(addExpense({description: 'Water bill', amount: 4500, createdAt : 10}));
// store.dispatch(addExpense({description: 'Gas bill', amount: 1000, createdAt : 5}));
// store.dispatch(addExpense({description: 'Rent', amount: 1095, createdAt : 10}));
// store.dispatch(addExpense({description: 'Cookie', amount: 69, createdAt : 99}));
// store.dispatch(setTextFilter('water'));

console.log(store.getState());

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
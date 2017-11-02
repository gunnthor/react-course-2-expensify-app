import expenseReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expenseReducer(undefined, {type: '@@INIT'});
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});


test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual(expenses);
})

test('Should add an expense', () => {
  const exp = {
    id: '309',
    description: 'laptop',
    note: '',
    createdAt: '332',
    amount: 600
  };

  const action = {
    type: 'ADD_EXPENSE',
    exp
  };

  const state = expenseReducer(expenses, action);
  expect(state).toEqual([...expenses, exp]);
});


// Should edit an expense
test('should edit an expense', () => {
  const amount = 122000

  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      amount
    }
  };
  const state = expenseReducer(expenses, action);
  expect(state[1].amount).toBe(amount);
});


test('should not edit if expense not found', () => {
  const amount = 122000

  const action = {
    type: 'EDIT_EXPENSE',
    id: -1,
    updates: {
      amount
    }
  };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual(expenses);
})
import { createStore } from 'redux';

// Action generators - functions that return action objects


const incrementCount = ({incrementBy = 1} = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
  type : 'DECREMENT',
  decrementBy
})

const resetCount = () => ({ type: 'RESET'});

const setCount = ({count}) => ({
  type : 'SET',
  count
})

// Reducers
// 1. Reducers are pure functions
// 2. Never change state or action
const countReducer = (state = { count: 0}, action) => {
  switch (action.type) {
    case 'INCREMENT' : 
      const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1
      return {
        count: state.count + incrementBy
      };

    case 'DECREMENT' :
      const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
      return {
        count: state.count - decrementBy
      }

    case 'RESET' :
      return {
        count: 0
      }

    case 'SET' : 
      return {
        count: 101
      }

    default: 
      return state;
  }

}

const store = createStore(countReducer);

const unsubscribe = store.subscribe( () => {
  console.log(store.getState());
});

//Actions - Object gets set to the store

//Increment the count
store.dispatch(incrementCount())
store.dispatch(decrementCount())
store.dispatch(incrementCount({incrementBy: 5}))
store.dispatch(decrementCount({decrementBy: 69}))
store.dispatch(resetCount());
store.dispatch(setCount({count : 101}));

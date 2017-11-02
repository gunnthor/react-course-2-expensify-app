import moment from 'moment';
import { setTextFilter, 
  sortByDate, 
  sortByAmount, 
  setStartDate, 
  setEndDate 
} from '../../actions/filters';

test('Should generate set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type:'SET_START_DATE',
    startDate: moment(0)
  })
});

test('Should generate set end date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type:'SET_END_DATE',
    endDate: moment(0)
  })
});

test('Should set text filter to prufu texti', () => {
  const text = 'prufu texti'
  const action = setTextFilter(text);
  expect(action).toEqual({
    type:'SET_TEXT_FILTER',
    text
  })
});

test('Should set text filter to none', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  })
});

test('Should start sorting by date', () => {
  const action = sortByDate();
  expect(action).toEqual({type: 'SORT_BY_DATE'});
});

test('Should start sorting by amount', () => {
  const action = sortByAmount();
  expect(action).toEqual({type: 'SORT_BY_AMOUNT'})
});
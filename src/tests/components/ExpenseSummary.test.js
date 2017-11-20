import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';
import expenses from '../fixtures/expenses';

test('Should correctly render expenseSummary with 1 expense', () => {
  const wrapper = shallow(<ExpenseSummary total={235} expenses={1} />)
  expect(wrapper).toMatchSnapshot();
});

test('Should correctly render expenseSummary with multiple expense', () => {
  const wrapper = shallow(<ExpenseSummary total={123456} expenses={23} />)
  expect(wrapper).toMatchSnapshot();
});
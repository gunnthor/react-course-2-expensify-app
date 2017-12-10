import {login, logout} from '../../actions/auth';


test('should generate login action object', () => {
  const action = login('abcd123');
  expect(action).toEqual({
    type: 'LOGIN',
    uid: 'abcd123'
  })
})

test('should generate logout action object', () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT'
  })
})
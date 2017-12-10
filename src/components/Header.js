import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
  <header>
    <div className="headerStyle">
      <h1>Expensify</h1>
      <div className="linkerne">
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard </NavLink>  
        <NavLink to="/create" activeClassName="is-active" >Create Expense </NavLink>  
        <NavLink to="/help" activeClassName="is-active">Help Page </NavLink>  
        <button onClick={startLogout}> Logout </button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header);
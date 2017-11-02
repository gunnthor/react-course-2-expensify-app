// Higher order component ( HOC ) 
//   - A component that renders another component
// Goal: to reuse code!
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      { props.isAdmin && <p>This is private info. Please don't share!</p>}
      <WrappedComponent {...props}/>
    </div>
  )
}

const requireAutentication = ( WrappedComponent ) => {
  return (props) => (
    <div>
      { props.isAutenticated ? <WrappedComponent {...props}/> : <p>You need to log in to see the content</p> }
    </div>
  )
}

const AdminInfo = withAdminWarning(Info);

const AuthInfo = requireAutentication(Info);

ReactDOM.render(<AdminInfo isAdmin={true} info="there are the details!"/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAutenticated={true} info="there are the details!"/>, document.getElementById('app'));
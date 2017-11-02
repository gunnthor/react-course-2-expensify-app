import React from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage = () => (
  <div>
    404! - Page not found. <h4><Link to="/">Go Home</Link></h4>
  </div>
);

export default NotFoundPage
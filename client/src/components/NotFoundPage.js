import React from 'react';
import Header from './Header';

const NotFoundPage = () => (
  <div>
    <Header />
    <h1 id="notfound__status">!404</h1>
    <h1>Page Not Found.</h1>
    <h1>We couldn't find what you were looking for.</h1>
    <h1><a href="/dashboard">Go back to dashboard.</a></h1>
  </div>
)

export default NotFoundPage;
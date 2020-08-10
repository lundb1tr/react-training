import React, { useState } from 'react';

const ErrorBoundary = ({ children }) => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const componentDidCatch = (error, info) => {
    setError(true);
    setErrorMessage(error);
  };

  return <div>{error ? <h1>{errorMessage}</h1> : children}</div>;
};

export default ErrorBoundary;

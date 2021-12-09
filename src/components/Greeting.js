import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchGreeting } from '../redux/greetings';

const Greeting = () => {
  const message = useSelector((state) => state.message);

  const dispatch = useDispatch();
  useEffect(() => {
    if (message === null) {
      dispatch(fetchGreeting());
    }
  }, []);

  const fetchRandomGreeting = () => {
    dispatch(fetchGreeting());
  };

  return (
    <div className="container secondary-color">
      <h1 className="display-4">Random Greetings</h1>
      <p className="lead">
        Get random greetings from different languages.
      </p>
      <button
        type="button"
        onClick={() => fetchRandomGreeting()}
        className="btn"
      >
        Get random greeting
      </button>
      <br />
      <p>
        { message && message.text }
      </p>
    </div>
  );
};

export default Greeting;

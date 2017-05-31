import React from 'react';
import ReactDOM from 'react-dom';

class Test extends React.Component {
  render() {
    return (
      <div>
        <h1>THIS IS A TEST</h1>
      </div>
    );
  }
}

ReactDOM.render(
  <Test />,
  document.getElementById('react-test')
);

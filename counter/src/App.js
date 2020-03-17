import React from 'react';
import Counter from './components/Counter';

class App extends React.Component {


  render() {
      return(
        <div>
          <h1>My counter App</h1>
          <Counter title = "Days"/>
          <Counter title = "hours"/>
          <Counter title = "seconds"/>
          <Counter title = "miliseconds"/>
        </div>
      )
    }
  }

export default App;

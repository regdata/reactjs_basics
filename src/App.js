import React from 'react';

import { Header } from './components/Header';
import { Home } from './components/Home';

class App extends React.Component {
  onGreet() {
    alert('Hello!');
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-xs-10 col-xs-offset-1'>
            <Header />
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-10 col-xs-offset-1'>
            <Home name={'Richard G'} age={37} greet={this.onGreet} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

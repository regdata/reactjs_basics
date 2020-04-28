import React from 'react';

import { Header } from './components/Header';
import { Home } from './components/Home';

class App extends React.Component {
  render() {
    let user = {
      name: 'Anna',
      hobbies: ['Sports', 'Reading'],
    };

    return (
      <div className='container'>
        <div className='row'>
          <div className='col-xs-10 col-xs-offset-1'>
            <Header />
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-10 col-xs-offset-1'>
            <Home name={'Richard G'} age={37} user={user} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

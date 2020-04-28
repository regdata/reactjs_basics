import React from 'react';

import { Header } from './components/Header';
import { Home } from './components/Home';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      homeLink: 'Home',
    };
    this.onChangeLinkName = this.onChangeLinkName.bind(this);
  }

  onGreet() {
    alert('Hello!');
  }

  onChangeLinkName(newName) {
    this.setState({
      homeLink: newName,
    });
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-xs-10 col-xs-offset-1'>
            <Header homeLink={this.state.homeLink} />
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-10 col-xs-offset-1'>
            <Home
              name={'Richard G'}
              age={37}
              greet={this.onGreet}
              changeLink={this.onChangeLinkName}
              initialLinkName={this.state.homeLink}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

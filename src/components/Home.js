import React from 'react';

export class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
      age: props.age,
    };
    this.onMakeOlder = this.onMakeOlder.bind(this);
  }

  onMakeOlder() {
    this.setState({
      age: this.state.age + 3,
    });
  }

  render() {
    return (
      <div>
        <p>In a new Component!</p>
        <p>
          Your name is {this.props.name}, your age is {this.state.age}
        </p>
        <hr />
        <button onClick={this.onMakeOlder} className='btn btn-primary'>
          Make me older!
        </button>
        <hr />
        <button onClick={this.props.greet} className='btn btn-primary'>
          Greet
        </button>
      </div>
    );
  }
}

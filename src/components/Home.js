import React from 'react';

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: props.age,
      homeLink: 'Changed Link',
    };
    this.onMakeOlder = this.onMakeOlder.bind(this);
    this.onChangeLink = this.onChangeLink.bind(this);
  }

  onMakeOlder() {
    this.setState({
      age: this.state.age + 3,
    });
  }

  onChangeLink() {
    this.props.changeLink(this.state.homeLink);
    console.log(this.state.homeLink);
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
        <hr />
        <button onClick={this.onChangeLink} className='btn btn-primary'>
          Change Header Link
        </button>
      </div>
    );
  }
}

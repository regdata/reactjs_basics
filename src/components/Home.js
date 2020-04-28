import React from 'react';

export class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
      age: props.age,
      homeLink: props.initialLinkName,
    };
    this.onMakeOlder = this.onMakeOlder.bind(this);
    this.onChangeLink = this.onChangeLink.bind(this);
    this.onHandleChange = this.onHandleChange.bind(this);
  }

  onMakeOlder() {
    this.setState({
      age: this.state.age + 3,
    });
  }

  onChangeLink() {
    this.props.changeLink(this.state.homeLink);
  }

  onHandleChange(event) {
    this.setState({
      homeLink: event.target.value,
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
        <hr />
        <input
          type='text'
          value={this.state.homeLink}
          onChange={event => this.onHandleChange(event)}
        />
        <button onClick={this.onChangeLink} className='btn btn-primary'>
          Change Header Link
        </button>
      </div>
    );
  }
}

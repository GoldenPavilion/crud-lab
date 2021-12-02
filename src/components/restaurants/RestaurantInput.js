import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    text: '',
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addRestaurant(this.state.text);
    this.setState({ text: '' })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            name="restaurantName"
            value={this.state.text}
            placeholder="restaurant name"
            onChange={this.handleChange} 
          />
          <input type="submit" value="Enter" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;

// XXX has a text input field
// XXX has an initial start with text key set to empty string
// XXX changes the component state with an onChange event
// XXX updates the state of the store after submitting the form 

// XXX has an unique id property for each element
// XXX has the restaurant as a prop
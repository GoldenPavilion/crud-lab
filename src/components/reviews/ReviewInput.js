import React, { Component } from 'react';

class ReviewInput extends Component {
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
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId})
    this.setState({ text: '' })
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text"
            name="review"
            value={this.state.text}
            placeholder="add a review"
            onChange={this.handleChange}
          />
          <input type="submit" name="Enter" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;

// XXX displays the ReviewInput component as a child of each Restaurant Component
// XXX has two text input fields, one for review input, and another for submitting
// XXX has an initial state with text key set to empty string
// XXX changes the component state with an onChange event
// XXX adds a review to the store when the form is submitted
// XXX updates the state of the store after submitting the form 
// XXX sets a property of restaurantId on the review input component from the parent components id
// XXX associates the review with the restaurant with a foreign key on the review
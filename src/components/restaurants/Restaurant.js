import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';

class Restaurant extends Component {


  render() {
    const { restaurant } = this.props;
  
    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick={() => this.props.deleteRestaurant(restaurant.id)}> X </button>
          <ReviewsContainer restaurant={restaurant}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;

// XXX displays the appropriate text
// XXX render an li
// XXX has the restaurant as a prop
// has a button that dispatches a DELETE_RESTAURANT action with the proper id when clicked
// updates the state of the store to remove the component

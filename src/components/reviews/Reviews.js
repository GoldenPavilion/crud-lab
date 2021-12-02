import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  
  renderReviews = () => {
    const reviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurant.id)
    return reviews.map(review => <Review review={review} key={review.id} deleteReview={this.props.deleteReview} />)
  }
  
  render() {
    return (
      <ul>
        {this.renderReviews()}
      </ul>
    );
  }
};

export default Reviews;

// XXX is a child of the ReviewsContainer component
// XXX displays a review for when it is associate with the restaurant
// does not display any review unassociated with the restaurant
// has an unique id property for each element
// XXX has a button that dispatches a DELETE_REVIEW action when clicked
// updates the state of the store to remove the component
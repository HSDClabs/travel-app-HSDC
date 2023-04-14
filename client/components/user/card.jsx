import React from 'react';

const Card = (props) => {
  // return a restaurant card with fields image, name, # of reviews, avg rating, address, and price
  // pulled from props passed down via the query to backend in nav-bar
  return (
    <div className='card-item'>
      <h3>{props.cardHeading}</h3>
      <img src={`${props.cardInfo.image}`} />
      <div className='card-info'>
        <h3>{props.cardInfo.name}</h3>
        <div>Number of Reviews: {props.cardInfo.review_count}</div>
        <div>Rating: {props.cardInfo.rating}⭐</div>
        <div>Address: {props.cardInfo.address}</div>
        <div>Price: {props.cardInfo.price}</div>
      </div>
    </div>
  )
}

export default Card;
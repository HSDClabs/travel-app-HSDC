import React, { useState } from 'react';
import Card from './card';

const CardContainer = (props) => {
  // props contains name, image, review_count, rating,address, price $

  // const [restaurants, setRestaurants] = useState(props.location.restaurantInfo)
  const randomGenerator = (num) => {
    return Math.floor(Math.random() * num);
  }

  const cardArr = [];

  if (props.location.coffeeInfo) {
    cardArr.push(<Card cardInfo={props.location.coffeeInfo[randomGenerator(props.location.coffeeInfo.length - 1)]} 
      cardHeading="Coffee"/>);
  }
  if (props.location.parkInfo) {
    cardArr.push(<Card cardInfo={props.location.parkInfo[randomGenerator(props.location.parkInfo.length - 1)]}
      cardHeading="Parks" />);
  }
  if (props.location.activityInfo) {
    cardArr.push(<Card cardInfo={props.location.activityInfo[randomGenerator(props.location.activityInfo.length - 1)]}
      cardHeading="Activities" />);
  }
  if (props.location.restaurantInfo) {
    cardArr.push(<Card cardInfo={props.location.restaurantInfo[randomGenerator(props.location.restaurantInfo.length - 1)]}
      cardHeading="Restaurant" />);
  }
  if (props.location.barInfo) {
    cardArr.push(<Card cardInfo={props.location.barInfo[randomGenerator(props.location.barInfo.length - 1)]}
      cardHeading="Night Life" />);
  }
  if (props.location.comedyInfo) {
    cardArr.push(<Card cardInfo={props.location.comedyInfo[randomGenerator(props.location.comedyInfo.length - 1)]}
      cardHeading="Comedy" />);
  }


  //return populated restaurant array as individual cards
  return (
    <div className="card-container">
      {cardArr}
    </div>
  );
};

export default CardContainer;

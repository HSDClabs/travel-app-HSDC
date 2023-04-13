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
    cardArr.push(<Card cardInfo={props.location.coffeeInfo[props.location.coffeeInfo.length - 1]} />);
  }
  if (props.location.parkInfo) {
    cardArr.push(<Card cardInfo={props.location.parkInfo[props.location.parkInfo.length - 1]} />);
  }
  if (props.location.activityInfo) {
    cardArr.push(<Card cardInfo={props.location.activityInfo[props.location.activityInfo.length - 1]} />);
  }
  if (props.location.restaurantInfo) {
    cardArr.push(<Card cardInfo={props.location.restaurantInfo[props.location.restaurantInfo.length - 1]} />);
  }
  if (props.location.barInfo) {
    cardArr.push(<Card cardInfo={props.location.barInfo[props.location.barInfo.length - 1]} />);
  }
  if (props.location.comedyInfo) {
    cardArr.push(<Card cardInfo={props.location.comedyInfo[props.location.comedyInfo.length - 1]} />);
  }


  //return populated restaurant array as individual cards
  return (
    <div className="card-container">
      {cardArr}
    </div>
  );
};

export default CardContainer;

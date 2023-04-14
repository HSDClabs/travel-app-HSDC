import React, { useState } from 'react';
import Card from './card';

const CardContainer = (props) => {
  // props contains name, image, review_count, rating,address, price $

  const cache = { coffee: null, park: null, activity: null, restaurant: null, bar: null, comedy: null };
  console.log(cache);

  // const [restaurants, setRestaurants] = useState(props.location.restaurantInfo)
  const randomGenerator = (num, caller) => {
    let myRand = Math.floor(Math.random() * num);
    if (props.location[`${caller}Info`].length < 2) return myRand;
    while (cache[caller] === myRand) {
      myRand = Math.floor(Math.random() * num);
    }
    cache[caller] = myRand;
    return myRand;
  }

  const cardArr = [];

  if (props.location.coffeeInfo) {
    cardArr.push(<Card cardInfo={props.location.coffeeInfo[randomGenerator(props.location.coffeeInfo.length - 1, 'coffee')]}
      cardHeading="Coffee" />);
  }
  if (props.location.parkInfo) {
    cardArr.push(<Card cardInfo={props.location.parkInfo[randomGenerator(props.location.parkInfo.length - 1, 'park')]}
      cardHeading="Parks" />);
  }
  if (props.location.activityInfo) {
    cardArr.push(<Card cardInfo={props.location.activityInfo[randomGenerator(props.location.activityInfo.length - 1, 'activity')]}
      cardHeading="Activities" />);
  }
  if (props.location.restaurantInfo) {
    cardArr.push(<Card cardInfo={props.location.restaurantInfo[randomGenerator(props.location.restaurantInfo.length - 1, 'restaurant')]}
      cardHeading="Restaurant" />);
  }
  if (props.location.barInfo) {
    cardArr.push(<Card cardInfo={props.location.barInfo[randomGenerator(props.location.barInfo.length - 1, 'bar')]}
      cardHeading="Night Life" />);
  }
  if (props.location.comedyInfo) {
    cardArr.push(<Card cardInfo={props.location.comedyInfo[randomGenerator(props.location.comedyInfo.length - 1, 'comedy')]}
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

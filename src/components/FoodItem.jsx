import React from 'react';
import styled from 'styled-components';

const FoodItemStyle = styled.div`
  height: 300px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, .2);
  background: var(--color-brand-1);
  color: #fff;
  overflow: hidden;
  img{
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  div{
    padding: 5px 10px;
  }
  h3, h5{
    margin: 5px 0;
  }
  h3{
    margin: 12px 0;
    font-weight: 300;
    font-size: 25px;
  }
  a{
    color: inherit;
  }
`;

const FoodItem = ({ children, rating, image }) => (
  <FoodItemStyle>
    <img src={image} alt="Food item" />
    <div>
      {children}
      <h5>{rating}</h5>
    </div>
  </FoodItemStyle>
);

export default FoodItem;

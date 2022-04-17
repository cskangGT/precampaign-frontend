import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const colors = {
  orange: '#FFBA5A',
  grey: '#A9A9A9',
};

export default function StarRating() {
  const stars = Array(5).fill(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const handleClick = (value: number) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (value: any) => {
    setHoverValue(value);
    // console.log(hoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
    // console.log(hoverValue);
  };

  //TODO: 여기다가 star value post 하고 그리고 어떻게 update 할지 useEffecgt관려해서 진목님꺼 봐보기

  return (
    <div style={styles.container}>
      <div style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              style={{ marginRight: 10, cursor: 'pointer' }}
              color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
            />
          );
        })}
      </div>
      test: {currentValue}
    </div>
  );
}

const styles: any = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
};

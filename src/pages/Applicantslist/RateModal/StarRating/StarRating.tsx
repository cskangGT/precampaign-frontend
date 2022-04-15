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

  const handleClick = (value: any) => {
    setCurrentValue(value);
    console.log(currentValue);
  };

  const handleMouseOver = (value: any) => {
    setHoverValue(value);
    // console.log(hoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
    // console.log(hoverValue);
  };

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
        test {currentValue}
      </div>
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

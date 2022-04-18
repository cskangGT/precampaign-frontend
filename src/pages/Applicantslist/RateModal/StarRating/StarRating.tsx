import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { backgroundRateState, creativityRateState, trendRateState } from '../../../Recoil/Atoms/atomCampaign';
import { StarRatingProps } from '../../../types';

const colors = {
  orange: '#FFBA5A',
  grey: '#A9A9A9',
};

export default function StarRating(rateKind: StarRatingProps) {
  const stars = Array(5).fill(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const setBackgroundRate = useSetRecoilState(backgroundRateState);
  const setTrendRate = useSetRecoilState(trendRateState);
  const setCreativityRate = useSetRecoilState(creativityRateState);
  const backgroundRate = useRecoilValue(backgroundRateState);

  const handleClick = (value: number, e: StarRatingProps) => {
    setCurrentValue(value);
    setBackgroundRate(value);
    console.log(typeof rateKind);
    if (e.rateKind === 'background') {
      setBackgroundRate(value);
    } else if (e.rateKind === 'trend') {
      setTrendRate(value);
    } else {
      setCreativityRate(value);
    }
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
              onClick={() => handleClick(index + 1, rateKind)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
            />
          );
        })}
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

import Image from 'next/image';
import React, { FC } from 'react';
import { Calendar as RNCalendar } from 'react-native-calendars';
import NextArrow from './img/next.png'

const Arrow = () => <Image src={NextArrow} height="32px" width="32px" />

const Calendar: FC = () => {
  return (
    <RNCalendar
      renderArrow={direction => direction === 'left' ? null : <Arrow />}
      markingType={'period'}
      markedDates={{
        '2012-05-15': { marked: true, dotColor: '#50cebb' },
        '2012-05-16': { marked: true, dotColor: '#50cebb' },
        '2012-05-21': {
          startingDay: true,
          color: '#50cebb',
          textColor: 'white',
        },
        '2012-05-22': { color: '#70d7c7', textColor: 'white' },
        '2012-05-23': {
          color: '#70d7c7',
          textColor: 'white',
          marked: true,
          dotColor: 'white',
        },
        '2012-05-24': { color: '#70d7c7', textColor: 'white' },
        '2012-05-25': { endingDay: true, color: '#50cebb', textColor: 'white' },
      }}
    />
  );
};

export {Calendar}
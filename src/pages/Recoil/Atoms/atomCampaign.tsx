import { atom } from 'recoil';
// import { ApplicantInfo } from '../../types';

export const campaginNameState = atom({
  key: 'campaginNameState',
  default: ' ',
});

export const campaignStatusState = atom({
  key: 'campaignStatusState',
  default: '',
});

export const backgroundRateState = atom<number>({
  key: 'backgroundRateState',
  default: 0,
});
export const trendRateState = atom<number>({
  key: 'trendRateState',
  default: 0,
});
export const creativityRateState = atom<number>({
  key: 'creativityRateState',
  default: 0,
});

// export const avgRateState = atom<number>({
//   key: 'avgRateState',
//   default: 0,
// });

// export const applicantInfoState = atom<ApplicantInfo>({
//   key: 'applicantInfoState',
//   default: {
//     name: '강성훈',
//     gender: 'M',
//     height: '188',
//     weight: '80',
//     keword: '미니멀',
//   },
// });

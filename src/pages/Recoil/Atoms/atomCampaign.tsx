// src/recoil/atoms/counterAtoms.ts
import { atom } from 'recoil';

export const campaginNameState = atom({
  key: 'campaginNameState',
  default: ' ',
});

export const campaignStatusState = atom({
  key: 'campaignStatusState',
  default: '',
});

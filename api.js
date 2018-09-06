import { timeline1, transports } from './config';

export const getTimeline = () => {

  return new Promise.resolve(timeline1);

};

export const getTransports = () => {

  return new Promise.resolve(transports);

};

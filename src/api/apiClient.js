import { PROPERTIES_ENDPOINT } from '../utils/constants';

export const fetchProperties = async () => {
  const response = await fetch(`${PROPERTIES_ENDPOINT}`);
  const data = await response.json();
  return data;
};
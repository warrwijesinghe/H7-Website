import {
  PROPERTIES_ENDPOINT,
  PROPERTY_TEXT,
  PROPERTY_IMAGE,
  BANNER
} from "../utils/constants";

export const fetchProperties = async () => {
  const response = await fetch(`${PROPERTIES_ENDPOINT}`);
  const data = await response.json();
  return data;
};

export const fetchPropertyText = async (property, page) => {
  const response = await fetch(`${PROPERTY_TEXT}/${property}/${page}`);
  const data = await response.json();
  return data;
};

export const fetchPropertyImage = async (
  propertyId,
  imgeType,
  pageName,
  imageCount
) => {
  const response = await fetch(`${PROPERTY_IMAGE}/${propertyId}/${imgeType}/${pageName}/${imageCount}`);
  const data = await response.json();
  return data;
};

export const fetchWebBanners = async (
  propertyName,
  pageName
) => {
  const response = await fetch(`${BANNER}/${propertyName}/${pageName}`);
  const data = await response.json();
  return data;
};

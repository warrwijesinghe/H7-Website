// constants.js

// API Endpoints
export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
export const PROPERTIES_ENDPOINT = `${API_BASE_URL}/properties_web`;
export const PROPERTY = `${API_BASE_URL}/property_web`;
export const PROPERTY_TEXT = `${API_BASE_URL}/property_text`;
export const PROPERTY_IMAGE = `${API_BASE_URL}/property_image_for_web`;
export const BANNER = `${API_BASE_URL}/web_banners`;
export const EXPERIENCES = `${API_BASE_URL}/experiences_for_web`;
export const OFFERS = `${API_BASE_URL}/offers_for_web`;

// Other constants
export const DEFAULT_LANGUAGE = 'en';
export const SUPPORTED_LANGUAGES = ['en', 'es', 'fr', 'de'];

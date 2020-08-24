/**
 * Helper function that capitalizes the first letter
 * @param text the string provided
 * @returns {string}
 */
const capitalizeFirstLetter = (text) => {
  if (typeof text !== 'string') return '';
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export default capitalizeFirstLetter;

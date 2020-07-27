/**
 * Core function tha generates
 * an actiion Createor
 * @param type
 * @param argNames
 * @returns {function(...[*]): {type: *}}
 */
const generateActionCreator = (type, ...argNames) => function (...args) {
  const action = { type };
  argNames.forEach((arg, index) => {
    action[argNames[index]] = args[index];
  });
  return action;
};

export default generateActionCreator;

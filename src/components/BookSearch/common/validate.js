/**
 * The validate rules
 * of @see BookSearchForm components
 * @param formValues the values of the form
 */
const validate = (formValues) => {
  const errors = {};
  if (!formValues.search) {
    errors.search = 'You must enter a book search ';
  }
  return errors;
};

export default validate;

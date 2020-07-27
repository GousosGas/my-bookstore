/**
 * function used in the validation of
 * the  @see BookForm redux form
 * @param formValues the values of the form
 */
export const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = 'You must enter a title ';
  }
  if (!formValues.title) {
    errors.title = 'You must enter a title ';
  }
  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }
  if (!formValues.categories) {
    errors.categories = 'You must select a category ';
  }
  if (!formValues.author) {
    errors.author = 'You must enter the author ';
  }
  if (!formValues.publisher) {
    errors.publisher = 'You must enter the publisher ';
  }
  if (!formValues.year) {
    errors.year = 'You must define the year ';
  }
  if (!formValues.pageNumbers) {
    errors.pageNumbers = 'You must define the numbers of pages ';
  }
  if (!formValues.isbn10) {
    errors.isbn10 = 'You must define the ISBN 10 ';
  }
  if (!formValues.isbn13) {
    errors.isbn13 = 'You must define the ISBN 13';
  }
  return errors;
};

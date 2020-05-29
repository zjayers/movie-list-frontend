import _ from 'lodash';

export default (items, pageNumber, pageSize) => {
  const startIndex = (pageNumber - 1) * pageSize;
  // Convert array to lodash wrapper, slice it, and take the items equal to the page size
  return _(items).slice(startIndex).take(pageSize).value();
};

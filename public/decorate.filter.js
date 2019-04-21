
export let decorateFilterName = 'decorate';

export let decorateFunction =  function() {
  function decorateFilter(input, option) {
    return option + input + option;
  }
  return decorateFilter;
};
const MAX_LOCAL_STORAGE_SEARCHES = 10;

const shouldRemoveLastEl = (arr: string[]): void => {
  if (arr.length > MAX_LOCAL_STORAGE_SEARCHES) arr.pop();
};

export const getNewArray = (value: string, array: string[]): string[] => {
  if (array.includes(value)) {
    array.splice(array.indexOf(value), 1);
  } else {
    shouldRemoveLastEl(array);
  }
  array.unshift(value);
  return array;
};

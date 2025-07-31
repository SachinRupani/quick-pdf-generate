export const isEmptyString = (value: string): boolean => {
  return value.trim().length < 1;
};

export const isEmptyArray = (array: Array<any>): boolean => {
  return array.length < 1;
};

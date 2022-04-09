export const serializeText = (string = '', width: number) => {
  let newString = string ? string : '';
  if (width > 768) {
    if (string && string.length > 40) {
      newString = newString.substring(0, 40) + '...';
    }
  } else if (width > 580) {
    if (string && string.length > 30) {
      newString = newString.substring(0, 30) + '...';
    }
  } else {
    if (string && string.length > 15) {
      newString = newString.substring(0, 15) + '...';
    }
  }
  return newString;
};

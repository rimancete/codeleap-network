export const getTimeDiff = (currentDate: any, postDate: any) => {
  const diff = currentDate - postDate;
  const unitmapping = {
    days: 24 * 60 * 60 * 1000,
    hours: 60 * 60 * 1000,
    minutes: 60 * 1000,
    seconds: 1000,
  };

  function floor(value: any) {
    return Math.floor(value);
  }

  if (floor(diff / unitmapping.days) > 0) {
    if (floor(diff / unitmapping.days) < 2)
      return floor(diff / unitmapping.days) + ' day ago';
    else return floor(diff / unitmapping.days) + ' days ago';
  } else if (floor((diff % unitmapping.days) / unitmapping.hours) > 0) {
    if (floor((diff % unitmapping.days) / unitmapping.hours) < 2)
      return floor((diff % unitmapping.days) / unitmapping.hours) + ' hour ago';
    else
      return (
        floor((diff % unitmapping.days) / unitmapping.hours) + ' hours ago'
      );
  } else if (floor((diff % unitmapping.hours) / unitmapping.minutes) < 2)
    return (
      floor((diff % unitmapping.hours) / unitmapping.minutes) + ' minute ago '
    );
  else
    return (
      floor((diff % unitmapping.hours) / unitmapping.minutes) + ' minutes ago '
    );
};

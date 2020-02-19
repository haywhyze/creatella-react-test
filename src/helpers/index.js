import uuidv4 from 'uuid/v4';

export const formatPrice = (price) => new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    currencyDisplay: 'symbol',
  }).format(price / 100);

export const getNewAd = (last, callback) => {
  /* generate a new number, if it is the same with last seen ad,
  generate another until it is not the same as last seen ad */
  let newAdNumber;
  do {
    newAdNumber = Math.floor(Math.random() * 1000);
  } while (newAdNumber === last);
  // use provided callback function to set newAd as last seen ad
  callback(newAdNumber);
  return newAdNumber;
};

export const insertAd = (listOfProducts, last, callback) => {
  // for every 20 products insert an ad
  for (let i = 0; i <= listOfProducts.length; i += 20) {
    if (i !== 0) {
      const src = getNewAd(last, callback);
      listOfProducts.splice(i, 0, { id: uuidv4(), src });
      i += 1;
    }
  }
};

export const formatDate = (time) => {
  const timeDifference = Date.now() - Date.parse(time);
  let formattedTime;

  if (timeDifference < 60000) {
    // if time difference is less than 1 minute, format in seconds
    if (Math.floor(timeDifference / 1000) === 1) formattedTime = '1 second ago';
    else formattedTime = `${Math.floor(timeDifference / 1000)} seconds ago`;
  } else if (timeDifference < 3600000) {
    // if time difference is less than 1 hour, format in minutes
    if (Math.floor(timeDifference / 60000) === 1) {
      formattedTime = '1 minute ago';
    } else formattedTime = `${Math.floor(timeDifference / 60000)} minutes ago`;
  } else if (timeDifference < 86400000) {
    // if time difference is less than 1 day, format in hours
    if (Math.floor(timeDifference / 3600000) === 1) {
      formattedTime = '1 hour ago';
    } else formattedTime = `${Math.floor(timeDifference / 3600000)} hours ago`;
  } else if (timeDifference < 604800000) {
    // if time difference is less than 1 week, format in days
    if (Math.floor(timeDifference / 86400000) === 1) {
      formattedTime = '1 day ago';
    } else formattedTime = `${Math.floor(timeDifference / 86400000)} days ago`;
  } else {
    // else supply full date
    formattedTime = new Date(time);
    formattedTime = formattedTime.toLocaleDateString('us-EN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  return formattedTime;
};

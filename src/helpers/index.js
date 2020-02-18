import uuidv4 from 'uuid/v4';

export const formatPrice = (price) => new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  currencyDisplay: 'symbol',
}).format(price / 100);

export const getNewAd = (last, callback) => {
  let newAdNumber;
  do {
    newAdNumber = Math.floor(Math.random() * 1000);
  } while (newAdNumber === last);
  callback(newAdNumber);
  return newAdNumber;
};

export const insertAd = (listOfProducts, last, callback) => {
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
    formattedTime = `${Math.floor(timeDifference / 1000)} seconds ago`;
  } else if (timeDifference < 3600000) {
    formattedTime = `${Math.floor(timeDifference / 60000)} minutes ago`;
  } else if (timeDifference < 86400000) {
    formattedTime = `${Math.floor(timeDifference / 3600000)} hours ago`;
  } else if (timeDifference < 604800000) {
    formattedTime = `${Math.floor(timeDifference / 86400000)} days ago`;
  } else {
    formattedTime = new Date(time);
    formattedTime = formattedTime.toLocaleDateString('us-EN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  return formattedTime;
};

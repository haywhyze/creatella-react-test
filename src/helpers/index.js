export const formatPrice = price => {
  return `$${price / 100}`;
};

export const formatDate = time => {
  const timeDifference = Date.now() - Date.parse(time);
  let formattedTime;

  if (timeDifference < 60000) {
    formattedTime = Math.floor(timeDifference / 1000) + " seconds ago";
  } else if (timeDifference < 3600000) {
    formattedTime = Math.floor(timeDifference / 60000) + " minutes ago";
  } else if (timeDifference < 86400000) {
    formattedTime = Math.floor(timeDifference / 3600000) + " hours ago";
  } else if (timeDifference < 604800000) {
    formattedTime = Math.floor(timeDifference / 86400000) + " days ago";
  } else {
    formattedTime = new Date(time);
    formattedTime = formattedTime.toLocaleDateString("us-EN", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  }

  return formattedTime;
};

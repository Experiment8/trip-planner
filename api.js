export const getTimeline = () => {

  return new Promise((resolve) =>
    fetch('http://10.171.37.144:8080/timeline/2018-09-08T10:00:00/2018-09-08T19:00:00')
      .then(response => response.json().then(resolve))
  );

};

export const getTransports = () => {

  return new Promise((resolve) =>
    fetch('http://10.171.37.144:8080/journey/1/7')
      .then(response => response.json().then(resolve))
  );

};

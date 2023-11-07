// The scope of `random` is too loose 
const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

// The scope of `days` is too tight 
const getTrainingDays = event => {
  let days = '';
  if (event === 'Marathon') {
     days = 50;
  } else if (event === 'Triathlon') {
     days = 100;
  } else if (event === 'Pentathlon') {
     days = 200;
  }
  return days;
};

// The scope of `name` is too tight 
let name1 = 'nana';
const logEvent = (name1, event) => {
  console.log(`${name1}'s event is: ${event}`);
};

const logTime = (name1, days) => {
  console.log(`${name1}'s time to train is: ${days} days`);
};

const event = getRandEvent();
const days = getTrainingDays(event);
// Define a `name` variable. Use it as an argument after updating logEvent and logTime 

logEvent(name1, event);
logTime(name1, days);


const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';
 
logEvent(name2, event2);
logTime(name2, days2);
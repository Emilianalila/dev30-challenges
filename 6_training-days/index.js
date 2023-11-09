//This approach allows you to write more reusable and understandable functions, since each function has a specific responsibility. Additionally, you can manipulate and work with the results of these functions in other parts of your code as needed.

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
  let days;
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
const logEvent = (name1, event) => {
  console.log(`${name1}'s event is: ${event}`);
};

const logTime = (name1, days) => {
  console.log(`${name1}'s time to train is: ${days} days`);
};

let name1 = 'nana';
const event = getRandEvent(); // we create a variable and then we used in a function as a parametro and then as a argumente in another function.
const days = getTrainingDays(event);

// Define a `name` variable. Use it as an argument after updating logEvent and logTime 
logEvent(name1, event);
logTime(name1, days);

//second person
const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';
 
logEvent(name2, event2);
logTime(name2, days2);



const menu = {
  courses: {
    appetizers:[] ,
    mains: [],
    desserts: []
  },
  addDishToCourse: function(courseName, dishName, dishPrice){
    const dish = {
      name: dishName,
      price: dishPrice
    }
    return menu['courses'][courseName].push(dish);          // the object is nested so it is difficult to push to the right place, 
  },
  getRandomDishFromCourse: function(courseName){
    let dishes = menu['courses'][courseName];
    //console.log(dishes)
    const randomNumber = Math.floor(Math.random()* dishes.length);
    dishes = menu['courses'][courseName][randomNumber]
    return dishes
  },
  generateRandomMeal: function(){
    let main = (menu.getRandomDishFromCourse(['mains']));
    let appetizers = (menu.getRandomDishFromCourse(['appetizers']));
    let desserts = (menu.getRandomDishFromCourse(['desserts']));
    let totalPrice = main.price + appetizers.price + desserts.price;
    let meal = (`Meal: Apptizers: ${appetizers.name}, 
      Main: ${main.name}, 
      Desserts: ${desserts.name}, 
      Total price: ${totalPrice}`);
      return console.log(meal)
  }
}
menu.addDishToCourse(['desserts'], 'Chocolate Icecream', 50);
menu.addDishToCourse(['desserts'], 'Tiramisu', 80);
menu.addDishToCourse(['desserts'], 'Strawberries with cream', 98);
menu.addDishToCourse(['mains'], 'Mashed potatoes with chicken', 150);
menu.addDishToCourse(['mains'], 'Spaguety bolognesa', 190);
menu.addDishToCourse(['mains'], 'Cesar Salad', 190);
menu.addDishToCourse(['appetizers'], 'Cheeses', 290);
menu.addDishToCourse(['appetizers'], 'Seasonal salad', 60);
menu.addDishToCourse(['appetizers'], 'Hummus with bread', 69);

menu.generateRandomMeal() 





//console.log(menu['courses']['desserts'])
//console.log(menu['courses']['mains']);
//console.log(menu['courses']['desserts'][1]['price']); // to check the price inside an array [0] index del primer item

//menu.getRandomDishFromCourse(['mains']);
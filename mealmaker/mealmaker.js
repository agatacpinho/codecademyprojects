const menu = {
  _courses: {
    appetizers: [],
    mains: [], 
    desserts: []
  },
  
  get appetizers(){
    return this._courses.appetizers;
  },
  
    set appetizers(appetizer){
    this._courses.appetizers.push(appetizer);
  },
  
  get mains(){
    return this._courses.mains;
  },
  
    set mains(main){
    this._courses.mains.push(main);
  },
  
  get desserts(){
    return this._courses.desserts;
  },
  
  set desserts(dessert){
    this._courses.desserts.push(dessert);
  },
  
  addDishToCourse(courseName, dishName, dishPrice){
    const dish = {dishName: dishName,
                  dishPrice: dishPrice};
    if(this._courses[courseName]=== undefined){
            this._courses[courseName] = [];
        }
  this._courses[courseName].push(dish);    
  },
  
  getRandomDishFromCourse(courseName){
    const dishes = this._courses[courseName];
    let num = Math.floor(Math.random() * dishes.length);
    return dishes[num];
  },
  
  generateRandomMeal(){
    let appetizer = getRandomDishFromCourse('appetizers');
    let main = getRandomDishFromCourse('mains');
    let dessert = getRandomDishFromCourse('dessert');
    return `Your meal consists of ${appetizer.name}, ${main.name} and ${dessert.name}. The total price of your meal is ${totalPrice}`;
  }
};

menu.getRandomDishFromCourse('appetizers');
menu.addDishToCourse('appetizers', 'Jaquimzinhos', 7);
menu.addDishToCourse('appetizers', 'Sopa', 5);
menu.addDishToCourse('appetizers', 'Croquetes', 4.50);
menu.addDishToCourse('main', 'Spaghetti Carbonara', 12);
menu.addDishToCourse('main', 'Empadão', 15);
menu.addDishToCourse('main', 'Salada Russa', 12.50);
menu.addDishToCourse('dessert', 'Mousse de chocolate', 7.50);
menu.addDishToCourse('dessert', 'Leite creme', 6);
menu.addDishToCourse('dessert', 'Fruta', 5);
console.log(menu._courses.dessert);

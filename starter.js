////////////////////////
////// CALCULATOR //////
////////////////////////

// CODE HERE

//Each math operation is the callback function: add, substract, multiply, divide.

//Inline arrow function with implicit return.
const add = (num1, num2) => num1+ num2;

//Regular arrow function.

const substract = (num1, num2) => {
  return num1 - num2
}

// Expression for multiplication

const multiply = function(num1, num2) {
  return num1 * num2
}

// Declaration for division

function divide(num1, num2) {
  return num1/num2
}

// console.log(divide(6,2));

//These are all callback functions(inner fxns).

//Now let's write the higher order fxns: calculator()

//+variable turns it into a number. !isNan makes sure is a number, according to Boolean.
//  if(!isNan(+num1) && !isNan(+num2) {

const calculator = (num1, num2, callback) => {
  if(+num1 && +num2) {
    num1 = +num1
    num2 = +num2
    return callback(num1, num2)
  }else{
    console.log("Give me numbers!")
  }
}

const result = calculator(3, 4, multiply);

console.log(result)


///////////////////////
////// PET STORE //////
///////////////////////

const dogProducts = [
    {
      name: 'leash',
      colors: ['red', 'blue', 'green'],
      category: 1,
      inventory: 30,
      basePrice: 13.99, 
      displayPrice: 13.99
    }, 
    {
      name: 'chew toy',
      colors: ['brown'],
      category: 2,
      inventory: 120,
      basePrice: 6.00, 
      displayPrice: 6.00
    }, 
    {
      name: 'rope',
      colors: ['blue & green', 'red & yellow'],
      category: 2,
      inventory: 75,
      basePrice: 4.99, 
      displayPrice: 4.99
    }
]

const catProducts = [
  {
    name: 'mouse toy', 
    colors: ['pink', 'grey', 'black'], 
    category: 2, 
    inventory: 125, 
    basePrice: 2.50, 
    displayPrice: 2.50
  },
  {
    name: 'cat sweater',
    colors: ['black'],
    category: 1,
    inventory: 15,
    basePrice: 10.00, 
    displayPrice: 10.00
  }, 
  {
    name: 'straching post',
    colors: ['tan'],
    category: 2,
    inventory: 40,
    basePrice: 22.99, 
    displayPrice: 22.99
  }
]

// CODE HERE


//These two are callabck fxns:
const applyPercentDiscount = (product, discount) => {
  product.displayPrice = product.basePrice * (1 - discount)
}

applyFlatRateDiscount = (product, discount) => {
  product.displayPrice = product.basePrice - discount
}

//Outer Fxns:

const applyDiscount = (arr, callback, discount) => {
  for(i = 0; i < arr.length; i++) {
    callback(arr[i], discount);
  }
}

//invoke the applyDiscount fxn (outer). It will invoke the applyPercentDiscount.

applyDiscount(dogProducts, applyPercentDiscount, .25)

//log the product, because that is what is being changed.
console.log(dogProducts)

//You could also use an outer if statement in code for specific products.

////////////////////////
////// SANDWICHES //////
////////////////////////

// CODE HERE

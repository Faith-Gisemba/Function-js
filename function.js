//You manage a grocery store and need to keep track of the inventory of various items. 
// You will use arrays to store the data and various functions to manipulate and analyze the data. 
// Create an array containing the names of all items in the inventory maximum of 10.
let fruitName = ['Raspberries', 'Kiwi', 'Peach','Orange'];
let fruitStock = [250, 210, 130,270];





// Write a function to add a new item to the inventory, updating both arrays.
function addItem(name, stock) {
  if (fruitName.length >= 10) {
    console.log('Highest number of fruits');
  } else {
    fruitName.push(name);
    fruitStock.push(stock);
    console.log(`Added ${name} and a stock of ${stock}`);
  }
}
addItem('mango', 300);
addItem('blueberry', 200);
addItem('grapes', 550);
addItem('Banana', 180);
addItem('Apple', 400);
addItem('Pineapple', 100);
console.log(fruitName)





// Write a function to update the stock quantity of an existing item
function updateStock() {
  fruitStock[2] = 500
  console.log(fruitStock)
}
updateStock()
console.log(fruitStock)





//Write a function to calculate the total number of items in the inventory.
function totalFruits() {
  let total = 0;
  for (let i = 0; i < fruitStock.length; i++) {
    total += fruitStock[i];
  }
  console.log(`Total fruits in inventory: ${total}.`);
}
totalFruits()
console.log(fruitStock)







// Write a function to find the item with the lowest stock quantity.
function lowestStock() {
  let least = 0;
  for(let l = 1; l < fruitStock.length; l++){
    if(fruitStock[l] < fruitStock[least]){
        least = l;
    }
  }
  console.log(fruitStock[least])
}
lowestStock();



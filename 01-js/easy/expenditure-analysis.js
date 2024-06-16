/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let arr = [];

  transaction.forEach(element => {
    let category = element['category'];
    let price = element['price'];

    let found = false;
    arr.forEach(elem =>{
      if(elem['category'] === category){
        elem['totalSpent'] = price + elem['totalSpent'];
        found = true; 
      }
    });

    if(found == false){
      arr.push({category: category, totalSpent: price});
    }
  });
  return arr;
}

module.exports = calculateTotalSpentByCategory;

/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const result = [];

  // Iterate over each transaction
  for (const transaction of transactions) {
    const { category, price } = transaction;
    let categoryFound = false;

    // Check if category already exists in the result array
    for (const obj of result) {
      if (obj[category] !== undefined) {
        obj[category] += price;
        categoryFound = true;
        break;
      }
    }

    // If category not found, add a new object to the result array
    if (!categoryFound) {
      const newObj = { [category]: price };
      result.push(newObj);
    }
  }

  return result;
}

const transactions = [
  { itemName: 'Item 1', category: 'Category A', price: 10, timestamp: Date.now() },
  { itemName: 'Item 2', category: 'Category B', price: 20, timestamp: Date.now() },
  { itemName: 'Item 3', category: 'Category A', price: 30, timestamp: Date.now() },
  { itemName: 'Item 4', category: 'Category C', price: 15, timestamp: Date.now() },
  { itemName: 'Item 5', category: 'Category B', price: 25, timestamp: Date.now() },
  { itemName: 'Item 6', category: 'Category A', price: 40, timestamp: Date.now() },
];

const result = calculateTotalSpentByCategory(transactions);

console.log(result)

module.exports = calculateTotalSpentByCategory;

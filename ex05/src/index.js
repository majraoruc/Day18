let shoppingList = new Map([
    ["Banana", 3],
    ["Pineapple", 5],
    ["Pear", 2],
    ["Carrot", 10],
    ["Apple", 1.5],
]);
let arrKey = [];
let arrValue = [];

for (let i of shoppingList.entries()) {
    arrKey.push(i[0]);
    console.log(`groceries: ${i[0]}`);
}
for (let i of shoppingList.entries()) {
    arrValue.push(i[1]);
    console.log(`amount: ${i[1]}`);
}

for (let i of shoppingList.entries()) {
    console.log([i[0], i[1]]);
}
module.exports = { shoppingList, arrKey, arrValue };

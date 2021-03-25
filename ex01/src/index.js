let myArr = [];
// Only change code below this line
function* multiplication(x) {
    for (i = 0; i <= x; i++) {
        myArr.push(x *= 2);
        yield x;
    }

}
let num = multiplication(3);
for (i = 1; i <=3; i++) {
    console.log(num.next().value);
}
// console.log(multiplication(3));
//Only change code above this line

module.exports = multiplication;
// Only change code below this line
function* insideGenerator3() {

    for (x = 6; x <= 10; x++) {
        if (x == 10) {
            yield "undefined";
        }
        yield x;
    }

}
function* insideGenerator2() {


    for (x = 10; x <= 15; x++) {

        yield x;

    }
}
function* insideGenerator1() {


    for (x = 1; x <= 5; x++) {

        yield x;

    }
}
function* myGenerator() {
    yield* insideGenerator1();
    yield* insideGenerator2();
    yield* insideGenerator3();

}




let iterator = myGenerator();
let fifteenArray = [];
let fifteenArrayStr = "";
for (let i = 0; i <= 15; i++) {
    let { value } = iterator.next();
    fifteenArray.push(value);

    if (i != 15) { fifteenArrayStr += value + "#, "; }
    else {
        fifteenArrayStr += value + "!";
    }
}

console.log(fifteenArrayStr);

// Only change code above this line
module.exports = { fifteenArray, myGenerator }
console.log("Practial Loops")
let a = 1

for (let a = 1; a <= 100; a++) {
    console.log(a)
}
for (var i = 1; i < 101; i++) {
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}
console.log("==========Part 2: Prime Time===========")
for (let n = 2; n <= 3; n++) {
    let isPrime = true

    for (let j = 2; j < n; j++) {
        if (n % j === 0) {
            // if this is true, it is NOT a prime number
            isPrime = false
            break
        }
    }

    if (isPrime === true) {
        console.log(`${n}` + isPrime)
    }


}

console.log("=====Feeling Loopy==========")
let cell1 = ("ID")
let cell2 = ("Name")
let cell3 = ("Ocupation")
let cell4 = ("Age")
console.log(cell1, cell2, cell3, cell4);

let row1 = ("\n42, Bruce, Knight, 41")
let row2 = ("\n57, Bob, Fry Cook, 19")
let row3 = ("\n63, Blaine, Quiz Master, 58")
let row4 = ("\n98, Bill, Doctor’s Assistant, 26")
console.log(row1, row2, row3, row4)


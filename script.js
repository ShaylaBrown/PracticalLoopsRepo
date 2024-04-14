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

console.log("=====Feeling Loopy 2==========")
let cell5 = ("Index")
let cell6 = ("Mass (kg)")
let cell7 = ("Spring 1 (m)")
let cell8 = ("Spring 2 (m)")
console.log(cell5, cell6, cell7, cell8);

let row5 = ("\n1, 0.00, 0.050, 0.050")
let row6 = ("\n2, 0.49, 0.066, 0.066")
let row7 = ("\n3, 0.98, 0.087, 0.080")
let row8 = ("\n4, 1.47, 0.116, 0.108")
let row9 = ("\n5, 1.96, 0.142, 0.138")
let row10 =("\n6, 2.45, 0.166, 0.158")
let row11 = ("\n7, 2.94, 0.193, 0.174")
let row12 = ("\n8, 3.43, 0.204, 0.192")
let row13 = ("\n9, 3.92, 0.226, 0.205")
let row14 = ("\n10, 4.41, 0.238, 0.232")
console.log(row5, row6, row7, row8, row9, row10, row11, row12, row13, row14)




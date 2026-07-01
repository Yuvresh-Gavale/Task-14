// VARIABLES
 
let n = 13;          // Number
let sum = 0;         // Sum of first n numbers
let table = 0;       // Table value
let isPrime = true;  // Prime check
let digitSum = 0;    // Sum of digits
let armstrongSum = 0;// Armstrong calculation

// 1.SUM OF FIRST N NUMBERS
for(let i=1; i<=n; i++) {
    sum += i;
}
console.log("Sum of first", n, "numbers =", sum);


// 2.TABLE OF N
console.log("\nTable of", n);

for (let i = 1; i <= 10; i++) {
    table = n * i;
    console.log(`${n} x ${i} = ${table}`);
}

// 3.PRIME NUMBER CHECK
if (n <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            isPrime = false;
            break;
        }
    }
}if (isPrime) {
    console.log("\n" + n + " is a Prime Number");
}else {
    console.log("\n" + n + " is NOT a Prime Number");
}

// 4. FACTORS OF N
console.log("\nFactors of", n);

for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
        console.log(i);
    }
}

// 5. SUM OF DIGITS
let temp = n;

while (temp > 0) {
    digitSum += temp % 10;
    temp = Math.floor(temp / 10);
}

console.log("\nSum of digits =", digitSum);

// 6. ARMSTRONG NUMBER CHECK
temp = n;

while (temp > 0) {
    let digit = temp % 10;
    armstrongSum += digit ** 3;
    temp = Math.floor(temp / 10);
}
if (armstrongSum === n) {
    console.log(n + " is an Armstrong Number");
}else {
    console.log(n + " is NOT an Armstrong Number");
}
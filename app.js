// loop
  for(let i = 1; i < 10; i++){
    console.log(i);
  }



// For1: 
let k = 5; 
let n = 3;  
for (let i = 1; i <= n; i++) {
    console.log(k);
}


// For2: 
let a = 2;  
let b = 6;  
let count = 0;
for (let i = a; i <= b; i++) {
    console.log(i);
    count++;
}
console.log("Jami: " + count);


// For3: 
count = 0;
for (let i = b - 1; i > a; i--) {
    console.log(i);
    count++;
}
console.log("Jami: " + count);


// For4:
let price = 5;  
for (let i = 1; i <= 10; i++) {
    console.log(i + " kg konfet narxi: " + (i * price));
}


// For5: 
for (let i = 1; i <= 10; i++) {
    let weight = i / 10;
    console.log(weight + " kg konfet narxi: " + (weight * price));
}


// For6: 
for (let i = 12; i <= 20; i += 2) {
    let weight = i / 10;
    console.log(weight + " kg konfet narxi: " + (weight * price));
}


// For7: 
let summ = 0;
for (let i = a; i <= b; i++) {
    summ += i;
}
console.log("Yig'indi: " + summ);


// For8: 
let product = 1;
for (let i = a; i <= b; i++) {
    product *= i;
}
console.log("Ko'paytma: " + product);


// For9:
summ = 0;
for (let i = a; i <= b; i++) {
    summ += i * i;
}
console.log("Kvadratlar yig'indisi: " + summ);


// For10: 
let S = 0;
n = 5;  // Misol uchun
for (let i = 1; i <= n; i++) {
    S += 1 / i;
}
console.log("S = " + S);
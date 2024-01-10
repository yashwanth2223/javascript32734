let n = parseInt(prompt("Enter the input:", 0));
let digit = 0;
let sum = 0;
let originalN = n;

while (n !== 0) {
    digit = n % 10;
    sum = sum + Math.pow(digit, 3);
    n = parseInt(n / 10);
}

if (sum === originalN) {
    alert("it  is an armstrong number")
} else {
    alert("it  is  not an armstrong number");
}

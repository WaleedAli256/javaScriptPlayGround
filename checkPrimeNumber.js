console.log(" lets try to check this number is prime or not");

var num = 7;
var checkValidity = num + " is  a prime number";
if (num == 1) {
    checkValidity = "1 is neither prime nor composite number.";
} else if (num > 1) {
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            checkValidity = num + " is not a prime number";
        }
    }
} else {
    checkValidity = num + " is not a prime number";
}

console.log(checkValidity);

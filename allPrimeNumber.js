console.log(" let print the first 10 prime number");

var primeCount = 0;

for (var num = 3; num < 100; num++) {
    var valid = true;
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            valid = false;
        }
    }
    if (valid) {
        // console.log(`${++primeCount}: `);
        console.log(i + " is the prime number");
    }
}

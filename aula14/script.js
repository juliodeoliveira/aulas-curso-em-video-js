
function line() {
   console.log("---------------------------")
}

c = 1
console.log("Começando...")

line()
console.log("Loop FOR")
for (var c = 1; c <= 10; c++) {
   console.log(c)
}
line()

console.log("Loop DO WHILE")
c = 1
do {
   console.log(c)
   c++
} while (c <= 10)
line()

console.log("Loop WHILE")
c = 1
while (c <= 10) {
   console.log(c)
   c++
}
line()
console.log("Fim...")
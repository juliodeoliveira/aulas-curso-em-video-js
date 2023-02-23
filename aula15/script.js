var num = [9, 8, 6, 7]
var count = 0

//Add numbers
while (count <= 5) {
   num.push(count)
   count++
}

console.log("\n")
console.log(num)
var posi = num.indexOf(0)
if (posi == -1) {
   console.log("Número não encontrado!")
} else {
   console.log("Está na posição: ", posi)
}

//Show the numbers
for (var pos = 0; pos < num.length; pos++) {
   console.log(`A posição: ${pos} tem valor: ${num[pos]}`)
}

console.log("\n")

for (let pos in num) {
   console.log(`O número: ${num[pos]}, está na posição: ${pos}`)
}



num.sort()

console.log(`Meu vetor/array organizado do menor para o maior é: ${num}`)


console.log("\n")
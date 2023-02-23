function parimp(n=0) {
   if (n % 2 == 0) {
      return "PAR"
   } else {
      return "IMPAR"
   }
}

function add(n1=0, n2=0) {
   return n1 + n2
}

var num1 = 12
var num2 = 40
console.log(`A soma entre ${num1} e ${num2} é `,add(num1, num2))
console.log("Esse número é ", parimp(add(num1, num2)))

// recursividade

function Fatorial(a) {
   if (a == 1) {
      return 1
   } else {
      return a * Fatorial(a-1)
   }
}

console.log(Fatorial(4))
let amigo = {nick:"Kalebe", age:16, weight:59.1, emagrecer(n=0) {
   this.weight -= n
}}
console.log("Antes: ", amigo)
amigo.emagrecer(15)
console.log("Depois: ", amigo)

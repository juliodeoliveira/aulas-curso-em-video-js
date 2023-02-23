function fat(a) {
   let fat = 1
   for (let c = a; c > 1; c--) {
      fat *= c
   }
   return fat
}

console.log(fat(5))

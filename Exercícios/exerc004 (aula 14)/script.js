function calculate() {
   var start = document.querySelector("input#num")
   var end = document.querySelector("input#numb")
   var jump = document.querySelector("input#numbe")

   var result = document.querySelector("div.Answer")

   var i = Number(start.value)
   var e = Number(end.value)
   var p = Number(jump.value)
   //console.log(i, e, p)

   if (i == 0 || e == 0 || p == 0) {
      window.alert("ERRO: Não é possível fazer uma soma com números menores que 1")
   } 

   if (i > e) {
      for (var x = i; x >= e; x -= p) {
         result.innerHTML += `${x} \u{1F449}`
      }
      
   }else {
      
   
      if (i > 0 || e > 0 || p > 0) {
         result.innerHTML = "Contando... <br>"

         for (var s = i; s <= e; s += p) {
            result.innerHTML += ` ${s} \u{1F449}`
         }
         result.innerHTML += " \u{1F3C1}"
      }
   }
   

}
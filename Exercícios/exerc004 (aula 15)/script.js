function calculate() {


   var n = document.querySelector("input#table")
   var result = document.querySelector("select#selection")
   
   result.innerHTML = ""
   
   var num = Number(n.value)
   var c = 0


   if (n.value.lenght == 0) {
      window.alert("Informe um número abaixo para que o site funcione corretamente!")
   }
   else {
      while (c <= 10) {
         var item = document.createElement("option")
         item.text = `${num} X ${c} = ${num*c}`
   
         //Only for languages like PHP
         item.value = `tab${c}`
   
         result.appendChild(item)
         c++
      }
   }
}
   
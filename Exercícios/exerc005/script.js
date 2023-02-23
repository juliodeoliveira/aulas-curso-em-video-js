let all_input = []

function insert() {
   let result = document.querySelector("div#output")
   result.innerHTML = ""
   let input = document.querySelector("input#num")

   var input_1 = Number(input.value)

   if (input_1 == 0 || input_1 > 100 || input_1 < 0) {

      window.alert("Por favor, insira um número válido.")

   }

   else if (all_input.includes(input_1) == true) {
      window.alert("Esse número já está inserido!")


   } else {

      let result = document.querySelector("select#selection")


      let item = document.createElement("option")
      item.text = `Número ${input_1} adcionado`

      result.appendChild(item)
      all_input.push(input_1)

   }
   input.value = ""
   input.focus()
}

function finish() {

   if (all_input.length == 0) {
      window.alert("Por favor, insira um número!")
   } else {
      
      let results = document.querySelector("div#output")

      let total = all_input.length
      let sum = 0
      let max = all_input[0]
      let min = all_input[0]
      let med = 0

      for (let posi in all_input) {
         
         sum += all_input[posi]

         if (all_input[posi] > max) {
            max = all_input[posi]
         }

         if (all_input[posi] < min) {
            min = all_input[posi]
         }
      
      }

      med = sum / total
   
      results.innerHTML = `Ao todo temos ${all_input.length} números cadastrados! <br> O maior número é: ${max} <br> O menor valor informado é o ${min}<br> A soma de todos os números é: ${sum} <br> A média dos valores é de: ${med}`

   }

}
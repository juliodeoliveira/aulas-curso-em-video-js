function verify() {
   var ano = document.getElementById("age").value 
   var date = new Date().getFullYear()
   var idade = date - ano

//   console.log("Sua idade é " + idade)
//   console.log(ano)

   var sexualityFema = document.getElementById("F").checked
   
   var sexualityMale = document.getElementById("M").checked
 
   var HM = ""

   if (ano == 0 || ano > date) {
      window.alert("Ano inválido! Tente novamente!")

   }else{

      if (sexualityFema == true) {
         HM = "uma mulher"
      }

      if (sexualityMale == true) {
         HM = "um homem"
      }

      var result = document.getElementById("resultado")
   }

   result.innerHTML = "Você é " + HM + ", e tem " + idade + " anos!"
}
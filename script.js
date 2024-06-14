let n1, presultado
num1 = document.getElementById('numero1')
presultado = document.getElementById('resultado')

function tabuada(){
   let resultado=''
   let n1= (parseInt(num1.value))
   let x=1
   while (x<=10){
       resultado += `<p>${n1} x ${x} = ${n1*x}</p>`
       exibirDados(resultado)
       x=x+1
       
   }
   
  
}


function exibirDados (resultado){
    limparCampos()
    presultado.innerHTML = resultado
    
   
}
function limparCampos(){
    num1.value = ''
    num1.focus()

}

const valor_de_x = document.getElementById('valor_x')
const coeficienteagular = document.getElementById('valor_a')
const coeficientelinear = document.getElementById('valor_b')
const botao_calcular = document.getElementById('btn_calcular')
const mostrar_resultado = document.getElementById('resultado');
let conta = 0

botao_calcular.addEventListener('click', function(){
    const x = Number(valor_de_x.value);
    const a = Number(coeficienteagular.value);
    const b = Number(coeficientelinear.value);

    const resultado = a * x + b;
    
    const mostrar_resultado = document.getElementById('resultado');
    mostrar_resultado.textContent = resultado;

})


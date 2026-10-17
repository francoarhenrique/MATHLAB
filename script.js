const valor_de_x = document.getElementById('valor_x')
const coeficienteagular = document.getElementById('valor_a')
const coeficientelinear = document.getElementById('valor_b')
const botao_calcular = document.getElementById('btn_calcular')
const mostrar_resultado = document.getElementById('resultado');
let conta = 0

botao_calcular.addEventListener('click', function(){

   if (
        valor_de_x.value.trim() === '' ||
        coeficienteagular.value.trim() === '' ||
        coeficientelinear.value.trim() === ''
    ) {
        alert('Campos vazios! Por favor, preencha todos.');
        return;
    }

    const x = Number(valor_de_x.value);
    const a = Number(coeficienteagular.value);
    const b = Number(coeficientelinear.value);

    const resultado = a * x + b;
    
    const mostra_resultado = document.getElementById('resultado')

    if(! Number.isFinite(resultado)){
        mostrar_resultado.textContent = 'Resultado inválido!';
    return;
    }

    mostrar_resultado.textContent = resultado;

})


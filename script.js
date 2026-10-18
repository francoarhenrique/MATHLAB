

const valor_de_x = document.getElementById('valor_x');
const coeficienteAngular = document.getElementById('valor_a');
const coeficientelinear = document.getElementById('valor_b');
const botao_calcular = document.getElementById('btn_calcular');
const mostrar_resultado = document.getElementById('resultado');

// Valida se todos os campos foram preenchidos
function validarCampos() {
    const camposVazios =
        valor_de_x.value.trim() === '' ||
        coeficienteAngular.value.trim() === '' ||
        coeficientelinear.value.trim() === '';

    if (camposVazios) {
        alert('Campos vazios! Por favor, preencha todos.');
        return false;
    }

    return true;
}

// Calcula a função afim: f(x) = ax + b
function calcularFuncao(x, a, b) {
    return a * x + b;
}

// Classifica a função de acordo com o coeficiente angular
function classificarFuncao(a) {
    if (a > 0) {
        return 'Crescente';
    } else if (a < 0) {
        return 'Decrescente';
    } else {
        return 'Constante';
    }
}

// Evento do botão de calcular
botao_calcular.addEventListener('click', function() {

    if (!validarCampos()) {
        return;
    }

    const x = Number(valor_de_x.value);
    const a = Number(coeficienteAngular.value);
    const b = Number(coeficientelinear.value);

    // Verifica se os valores são válidos
    if (
        !Number.isFinite(x) ||
        !Number.isFinite(a) ||
        !Number.isFinite(b)
    ) {
        mostrar_resultado.textContent =
            'Digite valores numéricos válidos!';
        return;
    }

    // Calcula o resultado
    const resultado = calcularFuncao(x, a, b);

    if (!Number.isFinite(resultado)) {
        mostrar_resultado.textContent = 'Resultado inválido!';
        return;
    }

    // Organiza o sinal do coeficiente linear
    const operacaoB = b < 0
        ? `- ${Math.abs(b)}`
        : `+ ${b}`;

    // Identifica o tipo de função
    const tipoFuncao = classificarFuncao(a);

    // Exibe todas as informações
    mostrar_resultado.textContent =
        `f(${x}) = ${resultado}\n` +
        `Coeficiente angular (a): ${a}\n` +
        `Coeficiente linear (b): ${b}\n` +
        `Tipo de função: ${tipoFuncao}\n` +
        `Cálculo: f(${x}) = ${a} × ${x} ${operacaoB}`;
});

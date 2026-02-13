// const pq so vou precisar pegar os elementos uma unica vez pra reutilizar em todos os calculos
const input01 = document.getElementById('valor01');

const input02 = document.getElementById('valor02');

// captura o container onde o resultado será exibido
const resultado = document.getElementById('resultado');

function calcularTotal(){
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    // verifica se é um número
    if (isNaN(v1) || isNaN(v2)){
        resultado.style.display = 'flex';

        resultado.innerHTML = `
            <h2>'Valores incorretos, digite um número para cada campo.'</h2>

        `
    }else{
        resultado.style.display = 'flex';

        resultado.innerHTML = `
            <h2>Total a pagar</h2>
            <ul>
                <li><span>Soma dos produtos</span> </li>
                <li>Preço do produto: <span> ${v1} </span> </li>
                <li>Quantidade: <span> ${v2} </span> </li>       
                <li>O total da compra será de: <span>R$${v1 * v2}</span> </li>
            </ul>
        `
    }
}

// refazer
function desconto(){
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    let calc_desconto = (v1*v2)/100
    let total = v1 - calc_desconto

    if (isNaN(v1) || isNaN(v2)){
        resultado.style.display = 'flex';

        resultado.innerHTML = `
            <h2>'Valores incorretos, digite um número para cada campo.'</h2>

        `
    }else{
        resultado.style.display = 'flex';

        resultado.innerHTML = `
            <h2>Total a pagar</h2>
            <ul>
                <li><span>Desconto</span> </li>
                <li>Foi aplicado um desconto de: <span> ${v1} </span> </li>
                <li>Sobre o valor de: <span> ${v2} </span> </li>       
                <li>Valor final com desconto: <span>R$${total}</span> </li>
            </ul>
        `
    }

    

}

function juros(){
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    let acrescimo = (v1*v2) / 100
    let total = v1 + acrescimo

    if (isNaN(v1) || isNaN(v2)){
        resultado.style.display = 'flex';

        resultado.innerHTML = `
            <h2>'Valores incorretos, digite um número para cada campo.'</h2>

        `
    }else{
        resultado.style.display = 'flex';

        resultado.innerHTML = `
            <h2>Total a pagar</h2>
            <ul>
                <li><span>Acréscimo Aplicado</span> </li>
                <li>Foi aplicado um acréscimo de: <span> ${v1}% </span> </li>
                <li>Sobre o valor de: <span> R$${v2} </span> </li>       
                <li>Valor final com juros: <span>R$${total}</span> </li>
            </ul>
        `
    }
}

function comissao(){
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    let  porcentagem = v2 / 100
    comissao = porcentagem * v1

    if (isNaN(v1) || isNaN(v2)){
        resultado.style.display = 'flex';

        resultado.innerHTML = `
            <h2>'Valores incorretos, digite um número para cada campo.'</h2>

        `
    }else{
        resultado.style.display = 'flex';

        resultado.innerHTML = `
            <h2>Total a pagar</h2>
            <ul>
                <li><span>Comissão Calculada</span> </li>
                <li>Comissão de: <span> ${v1} </span> </li>
                <li>Sobre uma venda de: <span> ${v2} </span> </li>       
                <li>Valor da comissão <span>R$${comissao}</span> </li>
            </ul>
        `
    }




}

function lucro(){
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    let lucro = v1-v2

    if (isNaN(v1) || isNaN(v2)){
        resultado.style.display = 'flex';

        resultado.innerHTML = `
            <h2>'Valores incorretos, digite um número para cada campo.'</h2>

        `
    }else{
        resultado.style.display = 'flex';

        resultado.innerHTML = `
            <h2>Total a pagar</h2>
            <ul>
                <li><span>Lucro Obtido</span> </li>
                <li>Preço de venda: <span> ${v1} </span> </li>
                <li>Custo: <span> ${v2} </span> </li>       
                <li>O total do lucro será de: <span>R$${lucro}</span> </li>
            </ul>
        `
    }


}

function limpar(){
    // esconder o container de resultado
    document.getElementById('resultado').style.display = 'none'
    // limpar os valores digitados nos campos
    document.getElementById('valor01').value = '';
    document.getElementById('valor02').value = '';
    input01.focus();
}
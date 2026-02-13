// const pq so vou precisar pegar os elementos uma unica vez pra reutilizar em todos os calculos
const input01 = document.getElementById('valor01');
console.log(input01);

const input02 = document.getElementById('valor02');
console.log(input02);

// captura o container onde o resultado será exibido
const resultado = document.getElementById('resultado');
console.log(resultado);

function calcularTotal(){
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    // verifica se é um número
    if (isNaN(v1) || isNaN(v2)){
        alert('Valores incorretos, digite um número para cada campo.')
    }else{
        resultado.style.display = 'flex';

        resultado.innerHTML = `
            <h2>Total a pagar</h2>
            <ul>
                <li>Operação: <span>TOTAL</span> </li>
                <li>Preço: <span> ${v1} </span> </li>
                <li>Quantidade: <span> ${v2} </span> </li>       
                <li>O total da compra será de = <span>${v1 * v2}</span> </li>
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
        alert('Valores incorretos, digite um número para cada campo.')
    }else{
        resultado.style.display = 'flex';

        resultado.innerHTML = `
            <h2>Total a pagar</h2>
            <ul>
                <li>Operação: <span>DESCONTO</span> </li>
                <li>Preço de venda: <span> ${v1} </span> </li>
                <li>Quantidade: <span> ${v2} </span> </li>       
                <li>O preço com o desconto será de = <span>${total}</span> </li>
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
        alert('Valores incorretos, digite um número para cada campo.')
    }else{
        resultado.style.display = 'flex';

        resultado.innerHTML = `
            <h2>Total a pagar</h2>
            <ul>
                <li>Operação: <span>JUROS</span> </li>
                <li>:Preço de venda <span> ${v1} </span> </li>
                <li>Quantidade: <span> ${v2} </span> </li>       
                <li>O total da compra será de = <span>${total}</span> </li>
            </ul>
        `
    }
}

function comissao(){
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);


}

function lucro(){
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    let lucro = v1-v2

    if (isNaN(v1) || isNaN(v2)){
        alert('Valores incorretos, digite um número para cada campo.')
    }else{
        resultado.style.display = 'flex';

        resultado.innerHTML = `
            <h2>Total a pagar</h2>
            <ul>
                <li>Operação: <span>JUROS</span> </li>
                <li>Valor gasto no produto: <span> ${v1} </span> </li>
                <li>Valor utilizado para vender o produto: <span> ${v2} </span> </li>       
                <li>O total do lucro será de = <span>${lucro}</span> </li>
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
}
// const pq so vou precisar pegar os elementos uma unica vez pra reutilizar em todos os calculos
const input01 = document.getElementById('valor01');

const input02 = document.getElementById('valor02');

// captura o container onde o resultado será exibido
const resultado = document.getElementById('resultado');

function calcularTotal(){
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    let total = v1 *v2;

    // verifica se é um número
    if (isNaN(v1) || isNaN(v2)){
        resultado.style.display = 'flex';
        resultado.innerHTML = `
            <h2>Valores incorretos, digite um número para cada campo.</h2>

        `
    }else{
        resultado.style.display = 'flex';
        resultado.innerHTML = `
            <h2>Total da Compra</h2>
            <ul>
                <li>Preço do produto: <span> R$ ${v1.toFixed(2)} </span> </li>
                <li>Quantidade: <span> R$ ${v2.toFixed(2)} </span> </li>       
                <li>O total da compra será de: <span>R$ ${total.toFixed(2)}</span> </li>
            </ul>
        `;
    };
};

// refazer
function desconto(){
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    let calc_desconto = (v1*v2)/100;
    let total = v1 - calc_desconto;

    if (isNaN(v1) || isNaN(v2)){
        resultado.style.display = 'flex';
        resultado.innerHTML = `
            <h2>Valores incorretos, digite um número para cada campo.</h2>

        `
    }else{
        resultado.style.display = 'flex';
        resultado.innerHTML = `
            <h2>Desconto Aplicado</h2>
            <ul>
                <li>O valor foi: <span> R$ ${v1.toFixed(2)} </span> </li> 
                <li>O desconto aplicado foi de: <span> ${v2}% </span> </li>      
                <li>Valor final com desconto: <span>R$ ${total.toFixed(2)}</span> </li>
            </ul>
        `;
    };

    

};

function juros(){
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    let acrescimo = (v1*v2) / 100;
    let total = v1 + acrescimo;

    if (isNaN(v1) || isNaN(v2)){
        resultado.style.display = 'flex';
        resultado.innerHTML = `
            <h2>Valores incorretos, digite um número para cada campo.</h2>

        `
    }else{
        resultado.style.display = 'flex';
        resultado.innerHTML = `
            <h2>Juros Aplicado</h2>
            <ul>
                <li>O valor foi: <span> R$ ${v1.toFixed(2)} </span> </li>  
                <li>Foi aplicado um acréscimo de: <span> ${v2}% </span> </li>     
                <li>Valor final com juros: <span>R$ ${total.toFixed(2)}</span> </li>
            </ul>
        `;
    };
};

function comissao(){
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    let  porcentagem = v2 / 100;
    let comissao = porcentagem * v1;

    if (isNaN(v1) || isNaN(v2)){
        resultado.style.display = 'flex';
        resultado.innerHTML = `
            <h2>Valores incorretos, digite um número para cada campo.</h2>

        `
    }else{
        resultado.style.display = 'flex';
        resultado.innerHTML = `
            <h2>Comissão Calculada</h2>
            <ul>
                <li>Percentual aplicado: <span> ${v1}% </span> </li>
                <li>Valor da venda: <span> R$ ${v2.toFixed(2)} </span> </li>       
                <li>Valor final da comissão: <span> R$ ${comissao.toFixed(2)}</span> </li>
            </ul>
        `;
    };
};

function lucro(){
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    let lucro = v1-v2;

    if (isNaN(v1) || isNaN(v2)){
        resultado.style.display = 'flex';
        resultado.innerHTML = `
            <h2>Valores incorretos, digite um número para cada campo.</h2>

        `
    }else{
        resultado.style.display = 'flex';
        resultado.innerHTML = `
            <h2>Lucro Obtido</h2>
            <ul>
                <li>Preço de venda: <span> R$ ${v1.toFixed(2)} </span> </li>
                <li>Custo do produto: <span> R$ ${v2.toFixed(2)} </span> </li>       
                <li>O total do lucro será de: <span>R$ ${lucro.toFixed(2)}</span> </li>
            </ul>
        `;
    };
};

function limpar(){
    // esconder o container de resultado
    document.getElementById('resultado').style.display = 'none';
    // limpar os valores digitados nos campos
    document.getElementById('valor01').value = '';
    document.getElementById('valor02').value = '';
    input01.focus();
};
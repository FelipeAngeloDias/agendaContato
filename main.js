const form = document.getElementById('formContato');
const contatoNome = [];
const contatoTelefone = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    addlinha();
    atualizarTabela();

});

function addlinha(){

const inputNomeContato =  document.getElementById("nomeContato");
const inputTelefone =  document.getElementById("telefone");

if(contatoTelefone.includes(parseInt(inputTelefone.value))){
    alert(`O telefone: ${inputTelefone.value} já foi inserido!`);
} else {
    contatoNome.push(inputNomeContato.value);
    contatoTelefone.push(parseInt(inputTelefone.value));

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputTelefone.value}</td>`;
    linha += '</tr>';

    linhas += linha;
}

inputNomeContato.value = '';
inputTelefone.value = '';
}

function atualizarTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}


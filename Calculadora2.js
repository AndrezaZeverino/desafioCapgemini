

var datas;
var totalInvestido;
var totalDevisualizacoes;
var QntMaxCliques;
var QntMaxCompartilhamentos;

var clientes = [];

function cadastrarCliente(evento){
evento.preventDefault();

var cliente = {
  anuncio: evento.target.anuncio.value,
  cliente: evento.target.nomeCliente.value,
  dataInicio: new Date (evento.target.dataInicio.value),
  dataFim: new Date (evento.target.dataFim.value),
  valor: evento.target.valor.value,
}
clientes.push(cliente);

evento.target.anuncio.value = '';
evento.target.nomeCliente.value ='';
evento.target.dataInicio.value = '';
evento.target.dataFim.value = '';
evento.target.valor.value = '';

document.write(`${cliente.anuncio}<br>`);
document.write(`${cliente.dataInicio}<br>`);
document.write(`${cliente.dataFim}<br>`);
document.write(`${cliente.valor}<br>`);
datas = ((cliente.dataInicio - cliente.dataFim) /1000/60/60/-24);
totalInvestido = (datas * cliente.valor);
document.write(` Total investido: R$ ${totalInvestido},00 <br>`);
totalDevisualizacoes = (totalInvestido * 70);
document.write(`Quantidade máxima de visualizações: ${totalDevisualizacoes} <br>`)
QntMaxCliques = (totalInvestido * 3);
document.write(`Quantidade máxima de cliques: ${QntMaxCliques} <br>`);
QntMaxCompartilhamentos = (totalInvestido * 1);
document.write(`Quantidade máxima de compartilhamentos: ${QntMaxCompartilhamentos}`);
}
















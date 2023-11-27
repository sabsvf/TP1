const port = 8000;
const express = require('express');
const app = express();
const fs = require('fs');
app.set('view engine', "ejs");
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.get("/", (requisicao, resposta) => {
    resposta.render('Inicio')
})
app.get("/Portal", (requisicao, resposta) => {
    resposta.render('Portal')
})
app.get("/cad", (requisicao, resposta) => {
    resultado = ''
    resposta.render('cad')
})
app.post('/salvar', (requisicao, resposta) => {
    let nomeNoForm = requisicao.body.nome
    let datadenascNoForm = requisicao.body.datadenasc
    let ondemoraNoForm = requisicao.body.ondemora
    let tempoNoForm = requisicao.body.tempo
    // Salvando um nome (sobrescrevendo o arquivo)
    //fs.writeFileSync('nome.txt', nomeNoForm)
    // Salvando vários nomes
    //fs.appendFileSync('nomes.txt', `\n${nomeNoForm}`)
    let cadastro = {nome: nomeNoForm, datadenasc: datadenascNoForm, ondemora: ondemoraNoForm, tempo: tempoNoForm}
    fs.appendFileSync('nomes.json', `\n${JSON.stringify(cadastro)}`)
    resultado = `Olá, ${nomeNoForm, datadenascNoForm, ondemoraNoForm, tempoNoForm}`
    resposta.render('cad', { resultado });
})
app.listen(port, () => {
    console.log(`Servidor funcionando na porta: ${port}`);
    });
const express = require('express')
const fs = require('fs')

const app = express()
app.use(express.urlencoded({ extended: true }))
app.set("view engine", "ejs")

app.get('/', (request, response) => {
    resultado = ""
    response.render('index', { resultado })
})

app.post('/salvar', (req, res) => {
    let nomeNoForm = req.body.nome
    let datadenascNoForm = req.body.datadenasc
    let ondemoraNoForm = req.body.ondemora
    let tempoNoForm = req.body.tempo
    // Salvando um nome (sobrescrevendo o arquivo)
    //fs.writeFileSync('nome.txt', nomeNoForm)
    // Salvando vários nomes
    //fs.appendFileSync('nomes.txt', `\n${nomeNoForm}`)
    let cadastro = {nome: nomeNoForm, datadenasc: datadenascNoForm, ondemora: ondemoraNoForm, tempo: tempoNoForm}
    fs.appendFileSync('nomes.json', `\n${JSON.stringify(cadastro)}`)
    resultado = `Olá, ${nomeNoForm, datadenascNoForm, ondemoraNoForm, tempoNoForm}`
    res.render('index', { resultado })
})

app.listen(8080)
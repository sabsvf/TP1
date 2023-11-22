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
    // Salvando um nome (sobrescrevendo o arquivo)
    //fs.writeFileSync('nome.txt', nomeNoForm)
    // Salvando vários nomes
    //fs.appendFileSync('nomes.txt', `\n${nomeNoForm}`)
    let cadastro = {nome: nomeNoForm}
    console.log(cadastro);
    console.log('\n'+JSON.stringify(cadastro)+',');
    fs.appendFileSync('nomes.json', `\n${JSON.stringify(cadastro)}`)
    resultado = `Olá, ${nomeNoForm}`
    res.render('index', { resultado })
})

app.listen(8080)
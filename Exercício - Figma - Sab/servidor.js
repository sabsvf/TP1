const express = require ('express')
const app = express()
const fs = require('fs')

app.use(express.static('public'))
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }))
const PORT = 8080

app.get("/", (requisicao, resposta) => {
    resposta.render('Inicio')
})
app.get("/de", (requisicao, resposta) => {
    resposta.render('Portal')
})
app.get("/desk", (requisicao, resposta) => {
    resposta.render('Inscrição')
})
app.post('/salvar', (req, res) => {
    dados = {
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        senha: req.body.pass,
        Email: req.body.email,
        Nascimento: req.body.dia,
    }
    fs.appendFileSync('usuario.json', `\n${JSON.stringify(dados)}`)
    resultado = `Olá, ${dados}`
    res.render('inscrição', { resultado })
})
app.listen(8080)
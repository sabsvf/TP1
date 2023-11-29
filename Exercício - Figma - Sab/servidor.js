const express = require ('express')
const app = express()
const fs = require('fs')

app.use(express.static('public'))
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }))
const PORT = 8080

let vetorNomes = []
if (fs.existsSync('nomes.json')) {
    const dados = fs.readFileSync('nomes.json', 'utf-8')
    console.log(dados);
    vetorNomes = JSON.parse(dados)
}

app.get("/", (requisicao, resposta) => {
    resposta.render('inicio')
})
app.get("/de", (requisicao, resposta) => {
    resposta.render('portal')
})
app.get("/desk", (requisicao, resposta) => {
    resposta.render('inscrição')

})
app.post('/salvar', (req, res) => {
    dados = {
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        senha: req.body.pass,
        Email: req.body.email,
        Nascimento: req.body.dia,
    }

    vetorNomes.push(cadastro)
    fs.writeFileSync('nomes.json', JSON.stringify(vetorNomes))

    fs.appendFileSync('usuario.json', `\n${JSON.stringify(dados)}`)
    resultado = `Olá, ${dados}`
    res.render('inscrição', { resultado })
})

app.get('/mostrar', (req, res) => {
    res.render('nomes', { vetorNomes })
})

app.listen(8080)
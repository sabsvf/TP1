const express = require ('express')
const app = express()
const fs = require('fs')

app.use(express.static('public'))
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }))
const PORT = 8080

app.get("/", (requisicao, resposta) => {
    resposta.render('inicio')
})
app.get("/de", (requisicao, resposta) => {
    resposta.render('portal')
})
app.get('/desk', (request, response) => {
    resultado = ""
    response.render('inscrição', { resultado })
})
app.post('/salvar', (req, res) => {
    let nom = req.body.nome
    let sob = req.body.sobrenome
    dados = {
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        senha: req.body.pass,
        Email: req.body.email,
        Nascimento: req.body.dia,
    }
    vetorNomes.push(dados)
    fs.writeFileSync('nomes.json', JSON.stringify(vetorNomes))
    fs.appendFileSync('usuario.json', `\n${JSON.stringify(dados)}`)
    resultado = `Olá, ${nom} ${sob}`
    res.render('inscrição', { resultado })
})
let vetorNomes = []
if (fs.existsSync('nomes.json')) {
    const dados = fs.readFileSync('nomes.json', 'utf-8')
    console.log(dados);
    vetorNomes = JSON.parse(dados)
}
app.get('/mostrar', (req, res) => {
    res.render('lista', { vetorNomes })
})

app.listen(PORT, () => console.log(`Server rodando na porta ${PORT}`))
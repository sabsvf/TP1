const express = require ('express')
const app = express()
app.use(express.static('public'))
app.set("view engine", "ejs")

app.get("/", (requisicao, resposta) => {
    resposta.render('Inicio')
})
app.get("/de", (requisicao, resposta) => {
    resposta.render('Portal')
})
app.get("/desk", (requisicao, resposta) => {
    resposta.render('Inscrição')
})
app.listen(8080)
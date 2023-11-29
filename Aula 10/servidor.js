const express = require('express')
const fs = require('fs')

const app = express()
app.use(express.urlencoded({ extended: true }))
app.set("view engine", "ejs")

// Otimizando a gravação com uso de um vetor
let vetorNomes = []
if (fs.existsSync('nomes.json')) {
    const dados = fs.readFileSync('nomes.json', 'utf-8')
    console.log(dados);
    vetorNomes = JSON.parse(dados)
}

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
    //fs.appendFileSync('nomes.json', `\n${JSON.stringify(cadastro)}`)
    
    // Adiciona o nome no vetor e salva o vetor no arquivo
    vetorNomes.push(cadastro)
    fs.writeFileSync('nomes.json', JSON.stringify(vetorNomes))

    resultado = `Olá, ${nomeNoForm}`
    res.render('index', { resultado })
})

app.get('/mostrar', (req, res) => {
    res.render('nomes', { vetorNomes })
})

app.listen(8080)
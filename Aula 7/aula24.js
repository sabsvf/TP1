const express = require ('express')
const app = express()
app.set("view engine", "ejs")
app.use(express.static('public'))

app.get("/", (request, response) => {
    response.render("index"); 
})
app.get("/obj", (request, response) => {
    response.render("objetivos"); 
})
app.get("/tec", (request, response) => {
    response.render("tec"); 
})
app.get("/ps", (request, response) => {
    response.render("portugol"); 
})

app.listen(8080)
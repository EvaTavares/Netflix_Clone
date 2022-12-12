const express = require("express") //importar o express / criar um servidor estátio local
const path = require("path")       //importar a biblioteca que lida com a leitura de caminhos de arquivos
const port = 3333

let initialPath = path.join(__dirname, "public") //variável que concatena através do join o dirname e a pasta public, dinamicamente

let app = express() //instancia de aplicação do servidor
app.use(express.static(initialPath)) // servidor estático que serve a pasta public

app.get("/", (req, res) => {
    res.sendFile(path.join(initialPath, "index.html"))
}) // passando para o servidor que quando ele for chamado e nao tiver nada depois da barra, mandar arquivo, junçao inicialfile e html

app.listen(port, () => {
    console.log(`Server statrt up on port ${port}!`)
})
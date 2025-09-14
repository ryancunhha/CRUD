/* 

   OBJETIVO -> CRUD (CRIAR, LER, ATUALIZAR e DELETAR)

   x CRIAR USUARIO = POST - http://localhost:3333/usuario
     - nome, telefone
   x VER O USUARIO CADASTRADO = GET - http://localhost:3333/usuario ou GET - http://localhost:3333/buscar/usuario/:id
   x ATUALIZAR OS DADOS DO USUARIO = PUT - http://localhost:3333/edit/:id
   x DELETAR USUARIO = DELETE - http://localhost:3333/delete/:id

   Endereço: http://localhost:3333
   iniciar server sempre que atualizar o codigo: node --watch server.js 
*/

// express npm
const express = require("express")
const app = express() 

// prisma npm
const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

const endereço = 3333 // porta que vai ser usada
app.use(express.json()) // aviso pro express que vai usar json

// criar um novo usuario 
app.post("/usuario", async (req, res) => {

    const { nome, telefone } = req.body // informações que front-end manda

    const user = await prisma.user.create({
        data: {
            nome,
            telefone
        }
    }) // estrutura de criação do usuario

    res.status(200).send(user) // status ok 
})

// ver todos os usarios
app.get("/usuario", async (req, res) => {
    const users = await prisma.user.findMany() // procurar por todo banco de dados os usuarios

    res.status(200).send(users) // status ok e mostra os usuarios
})

// busca o usuarios pelo id
app.get("/buscar/usuario/:id", async (req, res) => {

    const id = req.params.id // salva o id selecionando na url

    const users = await prisma.user.findUnique({
        where: { id }
    }) // busca o usuario 

    if (!user) {
        return res.status(400).send({ mensagem: "usuario não existe"}) // ser o usuario não exsitir da um erro e mensagem
    }

    res.status(200).send(users)// status ok
})

// editar usuario
app.put("/edit/:id", async(req,res) => {
    const id = req.params.id // salva o id selecionado na url
    const { nome, telefone } = req.body // pega a informações do front-end 

    const userAtualizar = await prisma.user.update({
        where: {
            id
        },
        data: {
            nome,
            telefone
        }
    }) // atauliza o usuario

    return res.status(200).send(userAtualizar) // status ok
})

// deletar um usario
app.delete("/delete/:id", async (req,res) =>{
    const id = req.params.id // pega o id na url

    const userDeletar = await prisma.user.delete({
        where: {
            id
        }
    }) // deleta o usuario com a id

    return res.status(200).send(userDeletar) // status ok
})

app.listen(endereço, () => {
    console.log("servidor rodando")
}) // faz rodar o servidor

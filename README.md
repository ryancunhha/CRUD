# Projeto de API CRUD com Node.js e Prisma

Este é um projeto simples de uma API RESTful para gerenciar usuários, demonstrando as operações básicas de um CRUD (Create, Read, Update e Delete).

## Tecnologias Utilizadas

* **Node.js**: Ambiente de execução para o JavaScript no lado do servidor.
* **Express**: Framework para criar a API de forma rápida e eficiente.
* **Prisma**: ORM (Mapeador Objeto-Relacional) para interagir com o banco de dados.

## Funcionalidades (Endpoints)

A API possui os seguintes endpoints para manipulação de dados de usuários:

### Criar Usuário (Create)
* **Método:** `POST`
* **URL:** `http://localhost:3333/usuario`
* **Corpo da Requisição:**
    ```json
    {
      "nome": "Nome do Usuário",
      "telefone": "Telefone do Usuário"
    }
    ```

### Listar Todos os Usuários (Read)
* **Método:** `GET`
* **URL:** `http://localhost:3333/usuario`

### Buscar Usuário por ID (Read)
* **Método:** `GET`
* **URL:** `http://localhost:3333/buscar/usuario/:id`
* Substitua `:id` pelo ID do usuário desejado.

### Atualizar Usuário (Update)
* **Método:** `PUT`
* **URL:** `http://localhost:3333/edit/:id`
* Substitua `:id` pelo ID do usuário a ser atualizado.
* **Corpo da Requisição:**
    ```json
    {
      "nome": "Novo Nome",
      "telefone": "Novo Telefone"
    }
    ```

### Deletar Usuário (Delete)
* **Método:** `DELETE`
* **URL:** `http://localhost:3333/delete/:id`
* Substitua `:id` pelo ID do usuário a ser deletado.

## Como Rodar o Projeto Localmente

1.  Clone este repositório para sua máquina local:
    ```bash
    git clone [https://github.com/ryancunhha/CRUD.git](https://github.com/ryancunhha/CRUD.git)
    ```
2.  Navegue até a pasta do projeto:
    ```bash
    cd CRUD
    ```
3.  Instale as dependências:
    ```bash
    npm install
    ```
4.  Inicie o servidor (o comando com `--watch` reinicia o servidor automaticamente quando você salva uma alteração no código):
    ```bash
    node --watch server.js
    ```

O servidor estará rodando em `http://localhost:3333`.

---
Feito com ❤️ por ryancunhha
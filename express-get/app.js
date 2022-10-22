import express from 'express'
// const express = require('express')

const app = express()

app.get('/', (request, response) => {
  response.send('Olá meu get')
})

app.get('/books/:id', (request, response) => {
  const { id } = request.params
  console.log(id)
  response.send('rota de livros')
})

app.get('/user/:userId/books/:bookId', (request, response) => {
  const { bookId, userId } = request.params
  console.log(userId, bookId)
  response.send('rota de livros com usuário')
})

app.get('/search', (req, res) => {
  console.log(req)
  res.send(req.query)
})

app.listen(3000, () => console.log('server listening on port 3000'))

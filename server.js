const http = require('http')

const PORT = process.env.PORT || 3000

const server = http.createServer((request, response) => {
  if (request.url === '/') {
    if (request.method === 'GET') {
      response.end('You use GET method on "/" endpoint')
    }
    if (request.method === 'POST') {
      response.end('You use POST method on "/" endpoint')
    }
  }
  if (request.url === '/users') {
    if (request.method === 'GET') response.end('Users with GET')
    if (request.method === 'POST') response.end('Users with POST')
  }
})

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})

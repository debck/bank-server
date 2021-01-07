const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./controller/bank.controller')
const port = process.env.PORT || 4000
const cors = require('cors')


app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use(cors())


app.get('/', (request, response) => {
	html = `<h1>Note: This is the API for bank task. Built with Nodejs and PostgreSQL</h1>
			<h2>endpoint1: /api/branches/autocomplete?q=<></h2>
			<h2>endpoint2: /api/branches?q=<></h2>`
  response.send(html)
})


app.get('/api/banks', db.getAllBanks)
app.get('/api/branches/autocomplete', db.autocompleteQuery)
app.get('/api/branches', db.searchQuery)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})

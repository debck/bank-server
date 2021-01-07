const pool = require("../config/db.config").pool


const getAllBanks = (request, response) => {
  pool.query(`SELECT * FROM bank_branches LIMIT 100`, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const autocompleteQuery = (request,response) => {
	var queryString = request.query.q
	pool.query(`SELECT * FROM bank_branches WHERE branch iLIKE '%${queryString}%' ORDER BY ifsc ASC`, (error, results) => {
    if (error) {
       throw error
    }
    response.status(200).json(results.rows)
  })
}


const searchQuery = (request,response) => {
	var queryString = request.query.q
	pool.query(`SELECT t.* FROM bank_branches t WHERE (t.*)::text iLIKE '%${queryString}%' ORDER BY ifsc ASC`, (error, results) => {
    if (error) {
       throw error
    }
    response.status(200).json(results.rows)
  })
}

module.exports = {
  getAllBanks,
  autocompleteQuery,
  searchQuery
}
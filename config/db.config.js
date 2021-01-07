const Pool = require('pg').Pool


exports.pool = new Pool({ 
  user: '',
  host: '',
  database: '',
  password: '',
  port: 5432
})

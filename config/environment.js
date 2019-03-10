const port = process.env.port || 4000
const dbUri = process.env.MONGODB_URI || 'mongodb://localhost/setlister'
const secret = process.env.SECRET || 'shhhhh'

module.exports = {
  port, dbUri, secret
}

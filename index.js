const express = require('express')
const app = express()
const port = 3000
const router = require('./routes/index')

const expressLayouts = require('express-ejs-layouts')

app.set('view engine','ejs')
app.set('views','./views')

app.use(expressLayouts)

app.get('/',router )

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
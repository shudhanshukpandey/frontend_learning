const connectToMongo=require("./db");
const express = require('express')
connectToMongo()

const app = express()
const port = 3000

app.use("/api/auth",require("./routes/auth"))    //works similar to flask register_blueprint
app.use("/api/notes",require("./routes/notes"))

// app.get('/', (req, res) => {
//   res.send('Jai Bhawani')
// })

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})

const express = require('express')
const { nextTick } = require('process')
const app = express()
const port = 3000

app.use('/', function (req, res, next) {
  const method = req.method
  const url = req.url
  const time = new Date().toLocaleString()
  const startTime = Date.now()

  res.on("finish", () => {
    const finishTime = Date.now()
    console.log(`${time} | ${method} from ${url} | total time: ${finishTime - startTime}ms`)
  })

  next()
})


app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
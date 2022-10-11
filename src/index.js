const express = require('express')
const service = require('./service');
const app = express()

service.create()

app.get('/', (req, res) => {
    peopleService.list((listOfNames) => {
        res.send(listOfNames)
    })

})

app.listen(3000, () => {
    console.log('Running on => :3000')
})
const { request, response } = require('express')
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let rappers = {
    '21 savage': {
    'Age': 30,
    'birthName': 'Shéyaa Bin Abraham-Joseph',
    'placeOfBrith': ' Born in London, he moved to Atlanta with his mother at age seven'
},
'shance the rapper': {
    'Age': 29,
    'birthName': 'Chancelor Johnathan Bennett',
    'placeOfBrith': 'Born and raised in Chicago'
},

'dylan': {
    'Age': 28,
    'birthName': 'dylan',
    'placeOfBrith': 'dylan'
}

} 

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/rappers/:rapperName', (request, response)=> {
    const rapName = request.params.rapperName.toLowerCase()
    console.log(rapName)
    if ( rappers[rapName]){
        response.json(rappers[rapName])
    }else {
        response.json(rappers['dylan'])
    }
})


app.listen(PORT, ()=>{
    console.log(`Server runing on port ${PORT}`)
})
// Lets the server use express
const response = require('express')
const express = require('express')

// Lets the server use all the method included in express
const app = express()

// Lets the user fetch the API from localhost
const cors = require('cors')

const PORT = 8000

const foods = {
    'adobo': {
        'meat': ['chicken', 'pork'],
        'vegetables': ['garlic']
    },
    'afritada': {
        'meat': ['chicken', 'pork'],
        'vegetables': ['garlic', 'onion', 'bell peppers']
    },
    'pancit': {
        'meat': ['chicken', 'pork', 'crab', 'mussels'],
        'vegetables': ['garlic', 'onion', 'bell peppers', 'cabbage', 'string beans']
    }
}

// ==========
// MIDDLEWARE
// ==========
app.use(cors())

// ==========
// HANDLERS
// ==========
app.get('/', (request, response) => {
    // Respond with what?
    // We want to send a file back
    // Look for the file on the same path where server.js is and start looking for index.html there
    response.sendFile(__dirname + '/index.html')
})

// GET: Request for all food
app.get('/api/foods', (request, response) => {
    response.json(foods)
})


// GET: Request for specific food
app.get('/api/foods/:foodName', (request, response) => {
    const food = request.params.foodName.toLowerCase()
    response.json(foods[food])
})


// LISTEN: on PORT 8000
app.listen(process.env.PORT || PORT, () => {
    console.log(`SERVER STATUS: RUNNING on PORT ${PORT}`);
})
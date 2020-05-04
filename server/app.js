const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
const Reservation = require('./models/reservations');
const cors = require('cors');


const app = express();

//allow cross origin-requests
app.use(cors());

mongoose.connect('mongodb+srv://pooja:pooja123@grills-kglex.mongodb.net/GrillBer?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true  })
.then(() => console.log('Connected to database'))
.catch((err) => console.log('Failed to connect database',err))

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}));

app.listen(4000, () => { console.log('Now listening on port 4000'); });
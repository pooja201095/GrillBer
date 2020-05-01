const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const Grills = require('./models/grills');

const app = express();

mongoose.connect('mongodb+srv://pooja:pooja123@grills-kglex.mongodb.net/grill?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true  })
.then(() => console.log('Connected to database'))
.catch((err) => console.log('Failed to connect database',err))

// app.post('/grill', async (req, res) => {
//     const grill = new Grills(req.body);
  
//     try {
//       await grill.save();
//       res.send(grill);
//     } catch (err) {
//       res.status(500).send(err);
//     }
//   });

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}));

app.listen(4000, () => { console.log('Now listening on port 4000'); });
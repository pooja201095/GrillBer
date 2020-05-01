const graphql = require('graphql');
const _ = require('lodash');
const Grills = require('../models/grills');

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLList } = graphql;

var Grill = [
    {
        id:'1',
        name:'grill 1',
        description:'dummy text data',
        type: 'electric'
    },
    {
        id:'2',
        name:'grill 2',
        description:'dummy text data',
        type: 'manual'
    },
    {
        id:'3',
        name:'grill 3',
        description:'dummy text data',
        type: 'coal'
    },
]

const GrillType = new GraphQLObjectType({
    name:'Grill',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        description: {type: GraphQLString},
        type: {type: GraphQLString},
    })
});

const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        grill:{
            type:GrillType,
            args: { id:{type:GraphQLID}},
            resolve(parent,args){
                //code to get data from db/other sources
                // return _.find(Grills,{id:args.id});
            }
        },
        grills:{
            type:new GraphQLList(GrillType),
            resolve(parent,args){
                // return Grill;
            }
        }
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addGrill: {
            type: Grills,
            args: {
                name: { type: GraphQLString },
                type: { type: GraphQLString },
                description: { type: GraphQLString },
                price: { type: GraphQLString }
            },
            resolve(parent, args) {
                let grill = new Grills({
                    name: args.name,
                    type: args.type,
                    description: args.description,
                    price: args.price
                });
                return grill.save().then(result => {
                    console.log(result);
                });
            }
        }
    }
});


module.exports = new GraphQLSchema({
    query:RootQuery,
    mutation: Mutation
});
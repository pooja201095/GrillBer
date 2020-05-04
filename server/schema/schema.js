const graphql = require('graphql');
const _ = require('lodash');
const Grills = require('../models/grills');
const Reservation = require('../models/reservations');
const Users = require('../models/users');

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLList } = graphql;

const GrillType = new GraphQLObjectType({
    name: 'Grill',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        type: { type: GraphQLString },
        price: { type: GraphQLInt },
        reservation: {
            type: new GraphQLList(ReservationType),
            resolve(parent, args) {
                return Reservation.find({ grillId: parent.id })
            }
        }
    })
});

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLID },
        uname: { type: GraphQLString },
        password: { type: GraphQLString },
        reservation: {
            type:new GraphQLList(ReservationType),
            resolve(parent,args){
                return Reservation.find({userId:parent.id})
            }
        }
    })
});

const ReservationType = new GraphQLObjectType({
    name: 'Reservation',
    fields: () => ({
        id: { type: GraphQLID },
        userId: { type:GraphQLString },
        grillId: { type: GraphQLString },
        fromDate: { type: GraphQLString },
        toDate: { type: GraphQLString },
        fromTime: { type: GraphQLString },
        toTime: { type: GraphQLString },
        totalAmount: { type: GraphQLString },
        grill: {
            type: GrillType,
            resolve(parent, args) {
                return Grills.findById(parent.grillId)
            }
        },
        user:{
            type:UserType,
            resolve(parent,args){
                return Users.findById(parent.userId)
            }
        }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        grill: {
            type: GrillType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Grills.findById(args.id);
            }
        },
        grills: {
            type: new GraphQLList(GrillType),
            resolve(parent, args) {
                return Grills.find({});
            }
        },
        reservation: {
            type: ReservationType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Reservation.findById(args.id)
            }
        },
        reservations: {
            type: new GraphQLList(ReservationType),
            resolve(parent, args) {
                return Reservation.find({});
            }
        },
        user: {
            type: UserType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Users.findById(args.id);
            }
        },
        users: {
            type: new GraphQLList(UserType),
            resolve(parent, args) {
                return Users.find({});
            }
        },
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addGrill: {
            type: GrillType,
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
                return grill.save();
            }
        },
        addReservation: {
            type: ReservationType,
            args: {
                userId: { type: GraphQLString },
                grillId: { type: GraphQLString },
                fromDate: { type: GraphQLString },
                toDate: { type: GraphQLString },
                fromTime: { type: GraphQLString },
                toTime: { type: GraphQLString },
                totalAmount: { type: GraphQLString },
            },
            resolve(parent, args) {
                let reservation = new Reservation({
                    userId: args.userId,
                    grillId: args.grillId,
                    fromDate: args.fromDate,
                    toDate: args.toDate,
                    fromTime: args.fromTime,
                    toTime: args.toTime,
                    totalAmount: args.totalAmount,
                });
                return reservation.save();
            }
        },
        addUser: {
            type: UserType,
            args: {
                uname: { type: GraphQLString },
                password: { type: GraphQLString },
            },
            resolve(parent, args) {
                let user = new Users({
                    uname: args.uname,
                    password: args.password
                });
                return user.save();
            }
        },
    }
});


module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});
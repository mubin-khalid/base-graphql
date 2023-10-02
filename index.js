import express from "express";
import {graphqlHTTP} from 'express-graphql';
import schema from './data/schema';
import resolvers from "./data/resolvers";
const app = express();
app.get('/', (req, res) => {
    res.send('hello graphql!')
});


app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
}));

app.listen(8080, () => console.log(`server running on 8080`));
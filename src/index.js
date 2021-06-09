const app = require('express')()
const mongoose = require('mongoose')
const cors = require('cors')
const {ApolloServer, gql} = require('apollo-server-express')
const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')

app.use(cors({origin: "*"}))

const apollo = new ApolloServer({
    typeDefs,
    resolvers    
})

apollo.applyMiddleware({app})
async function server () {
    try {
        await mongoose.connect('mongodb+srv://admin1234:admin1234@main-test.3o272.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
            console.log('mongoose connected')
            app.listen(3000, () => console.log('server running'))
        })        
    } catch (error) {
        console.log(error)        
    }
}

server()




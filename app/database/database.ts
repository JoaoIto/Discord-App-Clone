import { MongoClient } from 'mongodb';


// Replace the uri string with your connection string.
const uri = "mongodb+srv://joaoito:23082005@discordcluster.rx6pi5s.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
async function connectToDatabase() {
    try {
        return client.db('discord-clone');
    } catch (error) {
        console.error('Erro na conexão com o MongoDB:', error);
        throw new Error('Erro na conexão com o MongoDB.');
    }
}

export default connectToDatabase;





























// -----------------------------------------------------------------------------------


// import { MongoClient } from 'mongodb';
//
// // Configuração da conexão com o banco de dados
// const client = new MongoClient(process.env.DATABASE_URL as string);
//
// async function connectToDatabase() {
//     try {
//         await client.connect();
//         const db = client.db();
//         console.log('Conectado ao MongoDB');
//         return db; // Retorne a instância do banco de dados
//     } catch (error) {
//         console.error('Erro na conexão com o MongoDB:', error);
//         throw new Error('Erro na conexão com o MongoDB.');
//     }
// }
//
// export default connectToDatabase;
//
//
//
//
// const { MongoClient } = require("mongodb");
//
// // Replace the uri string with your connection string.
// const uri = "mongodb+srv://joaoito:23082005@discordcluster.rx6pi5s.mongodb.net/?retryWrites=true&w=majority";
//
// const client = new MongoClient(uri);
//
// async function run() {
//     try {
//         const database = client.db('discord-clone');
//         const mensagens = database.collection('mensagens');
//
//         console.log(database);
//         console.log(mensagens);
//
//         const query = {};
//         const mensagem = await mensagens.findOne(query);
//
//         return database;
//         console.log("Conectado!");
//     } finally {
//         // Ensures that the client will close when you finish/error
//         await client.close();
//     }
// }
// run().catch(console.dir);
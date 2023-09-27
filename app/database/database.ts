// // mongodb.js
//
// // import { MongoClient } from 'mongodb'
// //
// // const uri = process.env.DATABASE_URL as string
// //
// // let client = new MongoClient(uri);
// // let clientPromise = client.connect()
// // export default clientPromise
// //
//
// import mongoose from 'mongoose';
//
// const connectToDatabase = async () => {
//     try {
//         await mongoose.connect(process.env.DATABASE_URL as string);
//         console.log('Conectado ao MongoDB');
//     } catch (error) {
//         console.error('Erro na conexão com o MongoDB:', error);
//     }
// };
//
// export default connectToDatabase;
//
//
// // import mongoose from 'mongoose';
// //
// // const connectToDatabase = async () => {
// //     try {
// //         await mongoose.connect(process.env.DATABASE_URL as string);
// //         console.log('Conectado ao MongoDB');
// //     } catch (error) {
// //         console.error('Erro na conexão com o MongoDB:', error);
// //     }
// // };
// //
// // export default connectToDatabase;


import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.DATABASE_URL as string);

async function connectToDatabase() {
    try {
        await client.connect();
        const db = client.db();
        console.log('Conectado ao MongoDB');

        // Faça um teste simples, por exemplo, contar o número de documentos em uma coleção
        const collection = db.collection('mensagens'); // Substitua 'suaColecao' pelo nome da sua coleção
        const count = await collection.countDocuments({});
        console.log(`Número de documentos na coleção: ${count}`);

        return 'Conexão bem-sucedida!';
    } catch (error) {
        console.error('Erro na conexão com o MongoDB:', error);
        return 'Erro na conexão com o MongoDB.';
    }
}

export default connectToDatabase;

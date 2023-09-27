import { MongoClient } from 'mongodb';

// Configuração da conexão com o banco de dados
const client = new MongoClient(process.env.DATABASE_URL as string);

async function connectToDatabase() {
    try {
        await client.connect();
        const db = client.db();
        console.log('Conectado ao MongoDB');
        return db; // Retorne a instância do banco de dados
    } catch (error) {
        console.error('Erro na conexão com o MongoDB:', error);
        throw new Error('Erro na conexão com o MongoDB.');
    }
}

export default connectToDatabase;

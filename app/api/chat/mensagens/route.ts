import express, { Request, Response } from 'express';
import mongoose, { Document } from 'mongoose';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

// Conexão com o MongoDB (substitua 'SUA_URL_DE_CONEXAO_AQUI' pela URL de conexão real)
mongoose.connect('SUA_URL_DE_CONEXAO_AQUI', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => console.error('Erro na conexão com o MongoDB:', error));
db.once('open', () => console.log('Conectado ao MongoDB'));

// Esquema do Modelo para as Mensagens
interface MensagemDocument extends Document {
    de: string;
    texto: string;
}

const mensagemSchema = new mongoose.Schema<MensagemDocument>({
    de: String,
    texto: String,
});

const Mensagem = mongoose.model<MensagemDocument>('Mensagem', mensagemSchema);

// Rota para obter mensagens
app.get('/api/chat/mensagens', async (req: Request, res: Response) => {
    try {
        const mensagens = await Mensagem.find();
        res.json(mensagens);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para criar uma nova mensagem
app.post('/api/chat/mensagens', async (req: Request, res: Response) => {
    const mensagem = new Mensagem({
        de: req.body.de,
        texto: req.body.texto,
    });

    try {
        const novaMensagem = await mensagem.save();
        res.status(201).json(novaMensagem);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
